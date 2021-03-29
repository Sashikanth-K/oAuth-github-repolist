import React, { useContext } from "react";
import UserProvider from "./UserProvider";

const Header = (props) => {
  const userContext = useContext(UserProvider.context);
  return (
    <div className="flex justify-between align-middle m-2 p-4 bg-white rounded-md shadow-md">
      <h1>{props.name + " Page"}</h1>
    </div>
  );
};

export default Header;
