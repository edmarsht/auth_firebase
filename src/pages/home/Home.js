import React, { useContext, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="home">
      <div className="home__title section__margin">
        {currentUser ? (
          <div className="container__connected">
            <h1>Hello Dude, You are connected ! </h1>
            <h1>You can join your private page here</h1>
            <Link to="/signup/private/private-home">
              <button className="noshadow">Go !</button>
            </Link>
          </div>
        ) : (
          <h1>Sign In & Sign out Auth Firebase</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
