import React from "react";
import "./App.css";
import Homepage from "./components/Hommepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactuspage/Contactus";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
