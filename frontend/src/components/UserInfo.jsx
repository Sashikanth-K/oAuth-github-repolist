import React, { Componentm, useState, useContext, useEffect } from "react";
import axios from "axios";
import UserProvider from "./UserProvider";

const UserInfo = (props) => {
  const userContext = useContext(UserProvider.context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const data = (await axios.get("/api/users/getuserdata")).data;
        console.log(data);
        userContext.setUserInfo(data);
        setUser(data);
      } catch (error) {}
    }
  }, []);

  return (
    <div>
      <h1>user info</h1>
    </div>
  );
};

export default UserInfo;
