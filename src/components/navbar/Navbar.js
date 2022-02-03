import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {signOut} from "firebase/auth";
import { useNavigate} from "react-router-dom"
import {auth} from "../../firebase-config"

function Navbar() {

  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connection and try again")

    }
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Auth-Firebase</h1>
      </Link>
      <div className="navbar__button">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/signin">
          <button>Sign in</button>
        </Link>
        <Link to="/logout">
          <button onClick={logout} className="color__logout">Log out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
