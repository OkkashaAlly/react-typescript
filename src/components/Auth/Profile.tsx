import React from "react";
import Login from "./Login";

import { PrivateProps } from "./Private";

type ProfileProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<PrivateProps>;
};

const Profile = ({ isLoggedIn, component: Component }: ProfileProps) => {
  if (isLoggedIn) return <Component name="Okkasha" />;

  return <Login />;
};

export default Profile;
