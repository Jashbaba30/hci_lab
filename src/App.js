import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <div>
                <Navbar /> <Register />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
