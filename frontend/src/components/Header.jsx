import React, { useContext } from "react";
import UserProvider from "./UserProvider";

const Header = (props) => {
  const userContext = useContext(UserProvider.context);
  return (
    <div className="flex justify-between align-middle m-2 p-4 bg-white rounded-md shadow-md">
      <h1>{props.name + " Page"}</h1>
      {userContext.isAuthorized ? (
        <div className="flex space-x-1 pl-2 pr-2 pt-1 pb-1  shadow-sm rounded-lg hover:bg-red-200">
          <button
            className="uppercase focus:outline-none "
            onClick={(e) => {
              window.location.href = "http://localhost:3000";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
