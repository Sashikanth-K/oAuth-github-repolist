import React, { Component } from "react";

const Header = (props) => {
  return (
    <div className="flex m-2 p-4 bg-gray-100 rounded-md">
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;
