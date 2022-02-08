import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <p>Hello, user</p>
      <button className="signin_button" onClick={() => navigate("/signup")}>
        Click to Login or Register
      </button>
    </div>
  );
};

export default Home;
