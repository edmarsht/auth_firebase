import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  // signUp est la fonction que j'ai fait passer
  const { signUp } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  const inputs = useRef([]);
  const addInputs = (el) => {
    // si el existe et qu'il n'est pas dans le tableau, je push el dans mon tableau inputs
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();
  const handleForm = async (e) => {
    // Comportement par défault pour ne pas avoir le rafraichissement
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 Characters min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef sert à récupérer notre formulaire
      // .reset() est une méthode JS qui permet de remettre à 0 les inputs
      formRef.current.reset();
      // Puis on supprime message d'erreur 
      setValidation("");
      navigate("./private/private-home")
    } catch (err) {
        if(err.code === "auth/invalid-email") {
            setValidation("Email format invalid")
        }
        if(err.code === "auth/email-already-in-use") {
            setValidation("Email already used")
        }
    }
  };

  return (
    <div className="signup section__padding section__margin">
      <div className="signup__container">
        <h1>Sign Up</h1>
        <div className="signup__container-content">
          <form onSubmit={handleForm} ref={formRef}>
            <div className="input__section">
              <label htmlFor="signUpEmail">
                <h3>Email</h3>
              </label>
              <input
                ref={addInputs}
                name="email"
                type="email"
                required
                id="signUpEmail"
              />
            </div>
            <div className="input__section">
              <label htmlFor="signUpPassword">
                <h3>Password</h3>
              </label>
              <input
                ref={addInputs}
                name="password"
                type="password"
                required
                id="signUpPassword"
              />
            </div>
            <div className="input__section">
              <label htmlFor="signUpPasswordrepeat">
                <h3>Confirm Password</h3>
              </label>
              <input
                ref={addInputs}
                name="passwordrepeat"
                type="password"
                required
                id="signUpPasswordrepeat"
              />
            </div>
            <button className="color__button">Submit</button>
            <h4 className="error__message">{validation}</h4>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
