import { createContext, useContext, useState } from "react";

export const UserContext = createContext(); // crear un contexto es para poder pasar parametros, variables, datos de forma global entre todos los documentos

const UserProvider = ({ children }) => {
   const [user, setUser] = useState(true);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
export default UserProvider;

export const useUserContext = () => useContext(UserContext);
