import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import config from "../config";

const context = createContext(null);
const UserProvider = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let { code, state } = queryString.parse(props.location.search);

    if (code && state == config.STATE) {
      console.log(code, "auth");
      fetchData(code);

    }

    async function fetchData(acode) {
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
  }, []);

  return (
    <context.Provider value={{ isAuthorized, setUserInfo, userInfo, errorMessage }}>
      {props.children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
