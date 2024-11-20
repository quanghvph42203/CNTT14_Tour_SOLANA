import React, { useState, useEffect } from "react";
import "../../../styles/main.css";
import "../../../styles/content.css";
import "../../../styles/footer.css";
import instance from "@/configs/axios";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser._id) {
      setUserId(storedUser._id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message || !userId) {
      alert("Vui lòng nhập nội dung và đảm bảo bạn đã đăng nhập.");
      return;
    }

    try {
      const response = await instance.post("/support", {
        userId,
        message,
      });

      alert("Yêu cầu hỗ trợ của bạn đã được gửi thành công!");
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu hỗ trợ:", error);
      alert("Đã xảy ra lỗi khi gửi yêu cầu.");
    }
  };

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
              <textarea
                id="form_message"
                name="message"
                className="form-control"
                rows={1}
                placeholder="Nhập nội dung cần hỗ trợ của bạn vào đây..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Gửi"
                onClick={handleSubmit}
              />
            </div>
          </div>

          <div className="footer-end">Trang web được thiết kế bởi CNTT-14</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
