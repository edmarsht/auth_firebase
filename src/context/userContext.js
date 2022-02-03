import { createContext, useState, useEffect } from "react";

import {
    signInWithEmailAndPaswword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase-config";

// le contexte est crée ici 
export const UserContext = createContext()


// un nouveau composant d'ordre supérieur qui entoure tous les composants à qui on veut passer des infos 
export function UserContextProvider(props) {

    // Pour firebase auth 
const [currentUser, setCurrentUser] = useState();
const [loadingData, setLoadingData] = useState(true);

const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)



const [test, setTest] = useState("ok")

return (
    <UserContext.Provider value={{test, signUp}}>
        {props.children}
    </UserContext.Provider>

 )
}