import React, { useEffect } from "react";

const UserInfo = () => {
  useEffect(() => {
    console.log("Component Mounted!"); // Logs to console when the component mounts
  }, []); // Empty dependency array ensures this runs only on mount

  return <h1>Welcome to React!</h1>;
};

export default UserInfo;