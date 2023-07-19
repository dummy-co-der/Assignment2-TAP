import React from "react";
import "./Homepage.css";
import Navbar from "../../common/Navbar";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <div style={{ backgroundColor: "whitesmoke", height: "90vh" }}>
        <div className="home_content">
          <div className="left" style={{ marginTop: "3rem" }}>
            <div className="paragraph">
              <p>
                Tailored digital <br />
                marketing services to <br />
                boost <span className="presence"> Online Presence </span>
                <div
                  className="dots"
                  style={{ left: "18.5rem", top: "19rem" }}
                />
                <div
                  className="dots"
                  style={{ left: "49.5rem", top: "18.9rem" }}
                />
                <div
                  className="dots"
                  style={{ left: "18.5rem", top: "24rem" }}
                />
                <div
                  className="dots"
                  style={{ left: "49.5rem", top: "24rem" }}
                />
              </p>
            </div>
            <div className="started">
              <p className="para">
                Digital marketing agency offering strategies and services to
                <br />
                boost businesses' online presence and achieve goals.
              </p>
              <button className="custom_button" style={{ marginTop: "2.5rem" }}>
                Let's get started
              </button>
            </div>
          </div>
          <div className="right" style={{ marginTop: "3rem" }}>
            <img src="./images/Design_xA0_Image_1_.png" />
            <div className="card">
              <img className="card_img" src="./images/Rectangle 645.png" />
              <img
                style={{
                  marginLeft: "-3.5rem",
                  position: "absolute",
                  marginTop: "4.8rem",
                }}
                src="./images/Ellipse 84.png"
              />
              <div className="card_content">
                <div className="card_circle">
                  <div className="circle_img1" />
                  <div className="circle_img2" />
                  <div className="circle_img3" />
                  <div className="circle_img4" />
                  <div className="circle_img5" />
                  <h3 className="stats"> 12056+ Contracts</h3>
                  <p className="stars">⭐ 5.0 (3.1K Reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted">
        <div>
          <p className="trusted_para"> Trusted Clients </p>
          <h2 className="trusted_heading">
            Companies that have worked with us in the <br /> past
          </h2>
        </div>
        <div className="clients">
          <img className="image" src="./images/image 13.png" />
          <img className="image1" src="./images/image 14.png" />
          <img className="image" src="./images/image 12.png" />
          <img className="image1" src="./images/image 14.png" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
