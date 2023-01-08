import React, { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext)
      userContext.setUser({
        name: "OkkashaAlly",
        email: "okkasha@xyz.com",
      });
  };

  const handleLogout = () => {
    if (userContext) userContext.setUser(null);
  };

  return (
    <div>
      <div className="flex gap-3">
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
      </div>

      <div className="">
        <p>user name is {userContext?.user?.name}</p>
        <p>user email is {userContext?.user?.email}</p>
      </div>
    </div>
  );
};

export default User;
