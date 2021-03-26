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
  const [isHome, setIsHome] = useState(true);

  const handleHomebuttonClick = (e) => {
    let trgt = e.target.id;
    if (trgt == "home" && !isHome) {
      setIsHome(!isHome);
    } else if (trgt == "repo" && isHome) {
      setIsHome(!isHome);
    }
  };

  const handleClick = () => {
    let url =
      "https://github.com/login/oauth/authorize?client_id=245323fa4f053a1e923b&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user&response_type=code&response_mode=form_post&nonce=34zgf1s4sar";
    window.location.href = url;
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header name={isHome ? "Home" : "Repositories"} />
      </div>
      <div className="flex  flex-grow overflow-y-auto">
        <div className="flex flex-col justify-around bg-blue-50 m-2 rounded-md p-4">
          <button
            id="home"
            className={`p-2 py-2 px-4 bg-transparent  font-semibold border border-blue-500 rounded
            hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none
            ${
              isHome
                ? `text-white border-transparent bg-blue-500 `
                : `text-blue-700`
            }  
            `}
            onClick={handleHomebuttonClick}
          >
            Home
          </button>
          <button
            id="repo"
            className={`p-2 py-2 px-4 bg-transparent  font-semibold border border-blue-500 rounded
            hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none
            ${
              !isHome
                ? `text-white border-transparent bg-blue-500 `
                : `text-blue-700`
            }  
            `}
            onClick={handleHomebuttonClick}
          >
            Repositories
          </button>
        </div>
        <div className="flex flex-col  justify-items-stretch flex-grow   m-2 rounded-lg p-4 overflow-y-auto bg-gray-50">
          {!userContext.isAuthorized ? (
            <div className="flex flex-col  justify-center justify-items-stretch flex-grow ">
              <div className="flex  justify-center focus:bg-gray-200">
                <button
                  className="p-2 uppercase 
                  bg-transparent hover:bg-black text-black font-semibold 
                  hover:text-white py-2 px-4 border
                   border-black hover:border-transparent 
                   rounded"
                  onClick={handleClick}
                >
                  connect with github
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  overflow-y-auto ">
              {isHome ? <UserInfo /> : <Repositories />}
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
