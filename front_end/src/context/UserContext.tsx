import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  return <UserContext.Provider value={{ name, setName, id, setId }}>{children}</UserContext.Provider>;
};
export default UserProvider;
