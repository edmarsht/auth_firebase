import { createContext, useState, useEffect } from "react";

// le contexte est crée ici 
export const UserContext = createContext()

// un nouveau composant d'ordre supérieur qui entoure tous les composants à qui on veut passer des infos 
export function UserContextProvider(props) {

const [test, setTest] = useState("ok")

return (
    <UserContext.Provider value={{test}}>
        {props.children}
    </UserContext.Provider>

 )
}