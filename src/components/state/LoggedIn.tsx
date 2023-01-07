import React, { useState } from "react";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <div className="">
        <button onClick={_ => setLoggedIn(false)}>logout</button>
        <button onClick={_ => setLoggedIn(true)}>login</button>
      </div>
      <div className="">User is {loggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
