import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnect, please check your internet connection and try again"
      );
    }
  };
  return (
    <div className="navbar">
      <NavLink to="/">
        <h1>Auth-Firebase</h1>
      </NavLink>

      {!currentUser ? (
        <div className="navbar__button">
          <NavLink to="/signup"     className={({ isActive }) => (isActive ? 'active' : '')}>
            <button>Sign up</button>
          </NavLink>
          <NavLink to="/signin">
            <button>Sign in</button>
          </NavLink>
        </div>
      ) : (
      <div className="navbar__button">
        <NavLink to="/logout">
          <button onClick={logout} className="color__logout">
            Log out
          </button>
        </NavLink>
      </div>
      )}
    </div>
  );
}

export default Navbar;
