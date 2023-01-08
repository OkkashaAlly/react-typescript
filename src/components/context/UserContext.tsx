import React, { useState, createContext } from "react";

type UserType = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextValueType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const UserContext = createContext<UserContextValueType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
