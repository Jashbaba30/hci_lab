import React, { useState } from "react";
import "./Register.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [toLogIn, setToLogIn] = useState(true);

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    if (toLogIn === true) {
      try {
        let logInResult = await auth.signInWithEmailAndPassword(
          email,
          password
        );

        if (logInResult) {
          console.log(logInResult);
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (password !== cpassword) {
        alert("Passwords dont match");
      }
      let signInResult = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (signInResult) {
        console.log(signInResult);
      }
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const change = async () => {
    setToLogIn(!toLogIn);
    console.log(toLogIn);
  };

  return (
    <div className="register">
      <div className="login_form">
        <h2>Sign In</h2>

        <form>
          <h5>Email: </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password: </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {toLogIn && <h5>Confirm Password: </h5>}
          {toLogIn && (
            <input
              type="password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          )}
          {toLogIn && (
            <button className="signIn_button" onClick={signUp}>
              Sign up
            </button>
          )}

          {!toLogIn && (
            <button className="signIn_button" onClick={signIn}>
              login
            </button>
          )}
        </form>

        <button className="login_registerButton" onClick={change}>
          {toLogIn ? "Already have account ? Login" : "Create new account"}
        </button>
      </div>
    </div>
  );
};

export default Register;
