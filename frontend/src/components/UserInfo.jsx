import React, {
  Componentm,
  useState,
  useContext,
  useEffect,
  Fragment,
} from "react";
import axios from "axios";
import UserProvider from "./UserProvider";

const UserInfo = (props) => {
  const userContext = useContext(UserProvider.context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);

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
    <div className="flex flex-col  pl-52 pr-52 pb-5 pt-5 space-y-3 shadow-md">
      {!user ? (
          <div className="flex flex-row justify-center ">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 mr-3"></div>
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-row justify-center ">
            <div className="rounded-full">
              <img className="object-contain h-24 w-full rounded-full" src={user.avatar_url}/>
            </div>
            </div>
          <div className="flex flex-row justify-center  ">
            <h1>Welcome, {user.name}</h1>
          </div>
          <div className="flex flex-row justify-between ">
            <h1>ID</h1>
            <h1>{user.id}</h1>
          </div>
          <div className="flex flex-row justify-between items-stretch">
            <h1>Login</h1>
            <h1>{user.login}</h1>
          </div>
          <div className="flex flex-row justify-between items-stretch">
            <h1>Email</h1>
            <h1>{user.email}</h1>
          </div>
          <div className="flex flex-row justify-between items-stretch">
            <h1>GitHub Page</h1>
            <h1>{user.html_url}</h1>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default UserInfo;
