import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup section__padding section__margin">
      <div className="signup__container">
        <h1>Sign Up</h1>
        <div className="signup__container-content">


          <form action="">
            <div className="input__section">
              <label htmlFor="signUpEmail">
                <h3>Email</h3>
              </label>
              <input name="email" type="email" required id="signUpEmail" />
            </div>
            <div className="input__section">
              <label htmlFor="signUpPassword">
                <h3>Password</h3>
              </label>
              <input name="password" type="password" required id="signUpPassword" />
            </div>
            <div className="input__section">
              <label htmlFor="signUpPasswordrepeat">
                <h3>Confirm Password</h3>
              </label>
              <input name="passwordrepeat" type="password" required id="signUpPasswordrepeat" />
            </div>
            <button className="color__button">Submit</button>
          </form>

        
        </div>
      </div>
    </div>
  );
}

export default Signup;
