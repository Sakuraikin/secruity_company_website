import React from "react";
import Services from './Services';
import Why from './Why';

const Landing: React.FC = () => {
  const navbar = [
    { name: "HOME" },
    { name: "Our Services" },
    { name: "About Us" },
    { name: "Contact Us" },
  ];
  return (
    <div id="main">
      <img
        style={{ width: "98.5vw", height: "100vh" }}
        src="/assets/img/Landing.png"
        alt="This is landing img."
      />
      <div id="Landing_image_effect" />
      <a href=" " id="LOGO">
        LOGO
      </a>
      <div id="navbar">
        {navbar.map((item) => (
          <a href=" " className="navbar_a">
            {item.name}
          </a>
        ))}
      </div>
      <div id="navbar_r">
        <a href=" ">Sign In</a>
      </div>
      <div id="frame4">
        <div id="landing_text1">Phoniex Security Service</div>
        <div id="landing_text2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </div>
        <div id="Login_Button">
          <img
            style={{ width: "180px" }}
            src="/assets/img/Login_Button.png"
            alt="This is Login_Button img"
          />
          <div id="Login_Button_text">Get Started</div>
        </div>
      </div>
      <Services />
      <Why />
    </div>
  );
};

export default Landing;
