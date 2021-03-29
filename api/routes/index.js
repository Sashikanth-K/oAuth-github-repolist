const express = require("express");
const router = express.Router();
const db = require("../db/models");
const config = require("../config");
const axios = require("axios");

router.get("/", (req, res) => {
  res.send("Hello World from API!");
});

router.get("/users", async (req, res) => {
  const users = await db.User.findAll();
  res.send({ count: users.length, users });
});

router.get("/credentials", async (req, res) => {
  const credentials = await db.Credentials.findAll();
  res.send({ count: credentials.length, credentials });
});

router.post("/users", async (req, res) => {
  const payload = req.body;
  await db.User.create({
    username: payload.username,
    password: payload.password,
  });
  res.send();
});

router.post("/credentials", async (req, res) => {
  const payload = req.body;
  await db.Credentials.create({
    appName: payload.appName,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
  });
  res.send();
});

router.delete("/users/:userId", async (req, res) => {
  const userId = req.params.userId;

  await db.User.destroy({
    where: {
      id: userId,
    },
  });
  res.status(204).send();
});

router.delete("/credentials/:credentialsId", async (req, res) => {
  const credentialsId = req.params.credentialsId;

  await db.Credentials.destroy({
    where: {
      id: credentialsId,
    },
  });
  res.status(204).send();
});

/**
 * TODO:
 *  - routes for handling authorization
 *  - save obtained credentials in db
 *  - routes to get the asked data from github api using the stored credentials
 */

// get access_token  by providing authorization code got from the client
async function getAccessToken(acode) {
  try {
    let data = await axios.post(
      config.GITHUB_ACCESS_TOKEN_API,
      {
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        code: acode,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (data && data.status == 200) {
      if (data.data.error) {
        throw new Error(data.data.error);
      }
      return data.data;
    }
    throw new Error("Something wrong in getting access_token");
  } catch (error) {
    console.log(error);
    return null;
  }
}

router.post("/authorize", async (req, res) => {
  try {
    let body = req.body;
    let accessTokenData = await getAccessToken(body.code); // get access_token

    if (!accessTokenData) {
      throw new Error("Unable to authorize currently. Try agian later.....");
    }

    await db.Credentials.update(
      {
        appName: "github",
        accessToken: accessTokenData.access_token,
        refreshToken: accessTokenData.refresh_token, // refresh_token are only provided by GitHub Apps not OAuth apps
      },
      { where: { id: 1 } }
    ); // store the access_token in db for future use
    // (access_token doesnt expire for OAuth GitHub app, unless revoked by the resource owner)

    res.status(200).send({
      message: "success",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message, status: 401 });
  }
});

// get user info related to the access_token stored in the db before
router.get("/users/getuserdata", async (req, res) => {
  try {
    let creds = await db.Credentials.findOne({
      where: {
        id: 1,
        appName : "github"
      },
    });

    let data = await axios.get(config.GITHUB_API + "/user", {
      headers: {
        Authorization: "token " + creds.accessToken,
      },
    });

    if (data && data.status == 200) {
      if (data.data.error) {
        throw new Error(data.data.error);
      }
      res.status(200).json(data.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

// get repos of the user related to the access_token stored in db before
router.get("/user/repos", async (req, res) => {
  try {

    const query = req.query;
    let creds = await db.Credentials.findOne({
      where: {
        id: 1,
        appName : "github"
      },
    });

    let data = await axios.get(config.GITHUB_API + `/user/repos`, {
      params : query,
      headers: {
        Authorization: "token " + creds.accessToken,
      },
    });

    if (data && data.status == 200) {
      if (data.data.error) {
        throw new Error(data.data.error);
      }
      res.status(200).json(data.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

module.exports = router;
