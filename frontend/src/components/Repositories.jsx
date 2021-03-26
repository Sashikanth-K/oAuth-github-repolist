import React, { Componentm, useState, useContext, useEffect } from "react";
import axios from "axios";
import UserProvider from "./UserProvider";

const Repositories = (props) => {
  const userContext = useContext(UserProvider.context);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const data = (await axios.get(`/api/users/${userContext.userInfo.login}/repos`)).data;
        console.log(data);
        //userContext.setUserInfo(data);
        setRepos(data);
      } catch (error) {}
    }
  }, []);

  return (
    <div>
      <h1>repo</h1>
    </div>
  );
};

export default Repositories;
