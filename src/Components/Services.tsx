import React from "react";

const Services: React.FC = () => {
  return (
    <div id="Service">
      <div id="Service_img">
        <img
          style={{ width: 450, height : 350, borderRadius: "30px" }}
          src="/assets/img/Service.png"
          alt="This is Services img."
        />
      </div>
      <div id="Service_text">
        <div id="Ser_txt_head">Our Services</div>
        <div className="Ser_txt">
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        <div className="Ser_txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div id="Ser_get">Get Started</div>
      </div>
    </div>
  );
};

export default Services;
