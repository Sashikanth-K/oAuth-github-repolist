import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import config from "../config";

const context = createContext(null);
const UserProvider = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function confirmAuthorized() {
    try {
      const data = (await axios.get("/api/isauthorized")).data;
      if (data && data.status == 200) {
        setIsAuthorized(true);
      } else {
        let { code, state } = queryString.parse(props.location.search);

        if (code && state == config.STATE) {
          console.log(code, "auth");
          authorize(code);
        }
      }
    } catch (error) {
      setIsAuthorized(false);
      setErrorMessage("Error in authorizing ! Try again....");
    }
  }

  async function authorize(acode) {
    try {
      const data = (
        await axios.post("/api/authorize", {
          code: acode,
        })
      ).data;
      if (data && data.status == 200) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        setErrorMessage(data.message);
      }
    } catch (error) {
      setIsAuthorized(false);
      setErrorMessage("Error in authorizing ! Try again....");
    }
  }

  useEffect(() => {
    confirmAuthorized();
  }, []);

  return (
    <context.Provider
      value={{ isAuthorized, setUserInfo, userInfo, errorMessage }}
    >
      {props.children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
