import React from "react";
import Navbar from "../../common/Navbar";
import "./Contactus.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
const Contactus = () => {
  return (
    <div className="contact_us">
      <Navbar />
      <div style={{ backgroundColor: "whitesmoke", height: "170vh" }}>
        <div className="contact">
          <h1 className="heading">
            Take your business to the <br />
            <h1 className="heading" style={{ marginTop: "1.3rem" }}>
              next level,
            </h1>
          </h1>
          <h1 className="today">CONTACT US TODAY!</h1>
          <p className="contact_para">
            If you're ready to take your business to the next level, contact us
            today. Our team is <br />
            always ready to help you achieve your digital marketing goals.
          </p>
          <div className="contact_form">
            <div className="left">
              <div className="overlay-img">
                <img src="./images/Ellipse-793.png" className="overlay-img1" />
                <img src="./images/Ellipse-794.png" className="overlay-img2" />
              </div>
              <div className="left_content">
                <h2 style={{ marginTop: "2rem" }}> Contact Information </h2>
                <span className="left_para">
                  Contact Us Today By Filling Out The Form Or Calling To Start
                  Optimizing Your Digital Ad Campaigns!
                </span>
              </div>
              <div className="icons">
                <div className="phone">
                  <FiPhoneCall />
                  <p style={{ marginLeft: "1.8rem" }}> +1 000 000 0000</p>
                </div>
                <div className="phone">
                  <AiOutlineMail />
                  <p style={{ marginLeft: "1.8rem" }}> demo@gmail.com </p>
                </div>
                <div className="phone">
                  <IoLocationOutline />
                  <p style={{ marginLeft: "1.8rem" }}>
                    2nd floor D-32, Street No. 2,
                    <br />
                    New Delhi, 110022
                  </p>
                </div>
                <div className="socials_div">
                  <div className="socials-circle">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-filled/20/facebook-new.png"
                      alt="facebook-new"
                    />
                  </div>
                  <div className="socials-circle">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/sf-regular/30/instagram-new.png"
                      alt="instagram-new"
                    />
                  </div>
                  <div className="socials-circle">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-filled/20/twitter.png"
                      alt="twitter-circled--v1"
                    />
                  </div>
                  <div className="socials-circle">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-filled/20/linkedin-2--v1.png"
                      alt="linkedin-circled--v1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="first_section">
                <div className="form_group">
                  <label htmlFor="name">
                    <b>First Name</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Sarthak"
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="email">
                    <b>Last Name</b>
                  </label>
                  <br />
                  <input type="text" name="name" id="name" placeholder="Garg" />
                </div>
              </div>
              <div className="first_section">
                <div className="form_group">
                  <label htmlFor="message">
                    <b>Email</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="name"
                    placeholder="demo@gmail.com"
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="message">
                    <b>Phone Number</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    id="name"
                    placeholder="+1 012 3456 789"
                  />
                </div>
              </div>
              <div className="third_section">
                <div className="form_group1" style={{ marginLeft: "4rem" }}>
                  <label htmlFor="message">
                    <b>Select Subject?</b>
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="selection"
                    id="selection"
                    placeholder="+1 012 3456 789"
                  />
                  General Inquiry
                </div>
                <div className="form_group1">
                  <label htmlFor="message"></label>
                  <br />
                  <input
                    type="radio"
                    name="selection"
                    id="selection"
                    placeholder="+1 012 3456 789"
                  />
                  General Inquiry
                </div>
                <div className="form_group1">
                  <label htmlFor="message"></label>
                  <br />
                  <input
                    type="radio"
                    name="selection"
                    id="selection"
                    placeholder="+1 012 3456 789"
                  />
                  General Inquiry
                </div>
                <div className="form_group1">
                  <label htmlFor="message"></label>
                  <br />
                  <input
                    type="radio"
                    name="selection"
                    id="selection"
                    placeholder="+1 012 3456 789"
                  />
                  General Inquiry
                </div>
              </div>
              <div className="fourth_section">
                <div className="form_group-ms" style={{ marginLeft: "4rem" }}>
                  <label htmlFor="message">
                    <b>Message</b>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    name="message"
                    id="name"
                    placeholder="Write Your Message"
                  />
                </div>
              </div>
              <button className="custom_button1"> Send Message </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
