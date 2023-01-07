import React, { Children, ReactNode } from "react";


type OscarProps = {
  children: ReactNode;
};

const Oscar = ({ children }: OscarProps) => {
  return <div className="">{children}</div>;
};

export default Oscar;
