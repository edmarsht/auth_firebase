import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="signin section__padding section__margin">
      <div className="signin__container">
        <h1>Sign In</h1>
        <div className="signin__container-content">
          <form action="">
            <div className="input__section">
              <label htmlFor="signinpEmail">
                <h3>Email</h3>
              </label>
              <input name="email" type="email" required id="signinEmail" />
            </div>
            <div className="input__section">
              <label htmlFor="signinPassword">
                <h3>Password</h3>
              </label>
              <input
                name="password"
                type="password"
                required
                id="signinPassword"
              />
            </div>
   
            <button className="color__button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
