import { createContext, useState } from "react";

export const AlertContext = createContext({});

const AlertProvider = ({ children }: any) => {
  const [supplier, setSupplier] = useState(null);

  return (
    <AlertContext.Provider value={{ supplier, setSupplier }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertProvider;
