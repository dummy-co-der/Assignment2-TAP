import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="./images/image-2.png"
          style={{
            width: "2rem",
            height: "2rem",
            marginTop: "1.7rem",
            marginRight: "0.5rem",
          }}
        />
        <p className="theadzplug"> TheAdzPlug </p>
      </div>
      <div className="items">
        <ul className="navbar_nav">
          <li className="list_item" onClick={() => navigate("/")}> Home </li>
          <li className="list_item"> About Us </li>
          <li className="list_item"> Services </li>
          <li className="list_item"> Products </li>
        </ul>
      </div>
      <div className="contact_us">
        <button className="custom_button" onClick={() => navigate("/contact")}> Contact Us </button>
      </div>
    </div>
  );
};

export default Navbar;
