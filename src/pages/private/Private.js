import React, { useContext } from "react";
import {UserContext} from "../../context/userContext";
// Outlet --> montre des routes imbriqués avec React router V6
// useLocation --> Permet d'avoir des infos sur la location 
// Navigate --> premet de naviguer
import {Outlet, Navigate} from "react-router-dom"

function Private() {

    const {currentUser} = useContext(UserContext);
    console.log("Private", currentUser)

    if (!currentUser) {
        return <Navigate to="/" />
    }

  return (
    <div className="container">
        {/* Outlet va renvoyer vers App.js sur PrivateHome --> C'est la sortie */}
      <Outlet />
    </div>
  );
}

export default Private;
