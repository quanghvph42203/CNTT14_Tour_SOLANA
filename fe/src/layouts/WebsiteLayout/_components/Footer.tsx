import React from "react";
import "../../../styles/main.css";
import "../../../styles/content.css";
import "../../../styles/footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="contact-container center">
          <div className="contact-top">
            <div className="introduct">
              <div className="container">
                <div className="content center">
                  <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                  <span className="line gold"></span>
                  <h2 className="t-content">
                    ĐỪNG QUÊN RẰNG CÒN CÓ{" "}
                    <span className="t-gold">GOODTRIP</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="container-email">
              <input
                id="form_email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Để lại Email của bạn*"
              />
              <input type="submit" name="submit" id="submit" value="Gửi" />
            </div>
          </div>

          <div className="footer-end">Trang web được thiết kế bởi CNTT-14</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
