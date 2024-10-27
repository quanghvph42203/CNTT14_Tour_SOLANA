import React from "react";
import videoSource from "../../../img/introbanner.mp4"; // Import video để đảm bảo đường dẫn đúng

import "../../../styles/slider.css";

const Banner = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          {/* Video component */}
          <video playsInline autoPlay muted loop>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-slider">
            <h2 className="heading-slider">Hãy cùng nhau đi khắp Việt Nam</h2>
            <h4>
              Muốn đi nhanh hãy đi một mình | muốn đi xa hãy đi cùng GoodTrip
            </h4>
            <a className="morebanner-btn" href="#4diemden">
              Trải nghiệm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
