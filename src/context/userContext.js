import { createContext, useState, useEffect } from "react";

import {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase-config";

// le contexte est crée ici 
export const UserContext = createContext()


// un nouveau composant d'ordre supérieur qui entoure tous les composants à qui on veut passer des infos 
export function UserContextProvider(props) {

    // Pour firebase auth 
    
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(()=> {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })

        return unsubscribe
    }, [])


return (
    <UserContext.Provider value={{ signUp, signIn, currentUser}}>
        {!loadingData && props.children}
    </UserContext.Provider>

 )
}