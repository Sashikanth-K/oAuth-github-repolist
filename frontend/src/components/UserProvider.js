import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

const context = createContext(null);
const UserProvider = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let { code } = queryString.parse(props.location.search);

    if (code) {
      console.log(code, "auth");
      fetchData(code);
    }

    async function fetchData(acode) {
      try {
        const apiMessage = (
          await axios.post("/api/authorize", {
            code: acode,
          })
        ).data;
        console.log(apiMessage);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    }
  }, []);

  return (
    <context.Provider value={{ isAuthorized, setUserInfo, userInfo }}>
      {props.children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
