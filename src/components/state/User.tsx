import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  return (
    <div>
      <div className="">
        <button
          onClick={_ =>
            setUser({ name: "Okkasha", email: "okkashaally006@gmail.com" })
          }
        >
          login
        </button>
        {/* <button onClick={_ => setUser(null)}>logout</button> */}
      </div>
      <div className="">User's name is {user.name}</div>
      <div className="">User's email is {user.email}</div>
    </div>
  );
};

export default User;
