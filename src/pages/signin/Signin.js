import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const { signIn } = useContext(UserContext);

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

    try {
      const cred = await signIn(
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
        setValidation("Wopsy, Email and/or Password incorrect !")
    }
  };

  return (
    <div className="signin section__padding section__margin">
      <div className="signin__container">
        <h1>Sign In</h1>
        <div className="signin__container-content">
          <form ref={formRef} onSubmit={handleForm}>
            <div className="input__section">
              <label htmlFor="signinpEmail">
                <h3>Email</h3>
              </label>
              <input
                ref={addInputs}
                name="email"
                type="email"
                required
                id="signinEmail"
              />
            </div>
            <div className="input__section">
              <label htmlFor="signInPassword">
                <h3>Password</h3>
              </label>
              <input
                ref={addInputs}
                name="password"
                type="password"
                required
                id="signInPassword"
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

export default Signin;
