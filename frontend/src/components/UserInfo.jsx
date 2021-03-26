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
    <div className="flex flex-col  pl-52 pr-52 pb-5 pt-5  ">
      {!user ? (
        <div className="flex flex-row justify-center ">
          <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 mr-3"></div>
        </div>
      ) : (
        <div className=" space-y-3 shadow-lg p-5 rounded-lg">
          <div className="flex flex-row justify-center p-4">
            <div className="rounded-full">
              <img
                className="object-contain h-24 w-full rounded-full"
                src={user.avatar_url}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center p-2 ">
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
          {user.email ? (
            <div className="flex flex-row justify-between items-stretch">
              <h1>Email</h1>
              <a href={`mailto:` + user.email} class="no-underline ...">
                {user.email}
              </a>
            </div>
          ) : null}

          {user.html_url ? (
            <div className="flex flex-row justify-between items-stretch">
              <h1>GitHub Page</h1>
              <a href={user.html_url} target="__blank" class="no-underline ...">
                {user.html_url}
              </a>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
