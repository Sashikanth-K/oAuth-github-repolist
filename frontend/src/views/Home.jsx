import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserProvider from "../components/UserProvider";
import UserInfo from "../components/UserInfo";
import Repositories from "../components/Repositories";

function Home(props) {
  const userContext = useContext(UserProvider.context);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isAutherized, setIsAutherized] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  //const [isHome, setIsHome] = useState(true);

  // useEffect(() => { 
    
  // }, []);

  const handleClick = () => {
    let url =
      "https://github.com/login/oauth/authorize?client_id=245323fa4f053a1e923b&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user&response_type=code&response_mode=form_post&nonce=34zgf1s4sar";
    window.location.href = url;
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header name={"Home page"} />
      </div>
      <div className="flex  flex-grow overflow-y-auto">
        <div className="flex flex-col justify-around bg-blue-50 m-2 rounded-md p-4">
          <button className="p-2 hover:bg-white focus:bg-gray-200">Home</button>
          <button className="p-2 hover:bg-white focus:bg-gray-200">
            Repositories
          </button>
        </div>
        <div className="flex  flex-col flex-grow bg-red-50 m-2 rounded-lg p-4 overflow-y-auto">
          {!userContext.isAuthorized ? (
            <div>
              <button
                className="p-2 hover:bg-white focus:bg-gray-200"
                onClick={handleClick}
              >
                connect with github
              </button>
            </div>
          ) : (
            <div>
              <h1>Autherized</h1>

              <UserInfo/>

              <Repositories/>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
