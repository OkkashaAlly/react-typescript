import React from "react";

export type PrivateProps = {
  name: string;
};

const Private = ({ name }: PrivateProps) => {
  return <div>Private profile - {name}</div>;
};

export default Private;
