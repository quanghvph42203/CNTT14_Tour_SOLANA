import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/main.css";
import "../../../styles/header.css";
import "../../../styles/content.css";
import "../../../styles/news.css";
import "../../../styles/slider.css";
import "../../../styles/blog.css";
import "../../../styles/goidulich.css";
import "../../../styles/footer.css";
import blg1 from "../../../img/goidulich/fansipan.jpg";
import blg2 from "../../../img/goidulich/dalat.png";
import blg3 from "../../../img/goidulich/duthuyen.jpg";
import blg4 from "../../../img/goidulich/mientay.jpg";

const Blog = () => {
  return (
    <div id="main">
      <div id="content">
        <div>
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  NƠI ĐÂY SẼ CẬP NHẬT
                  <span className="t-gold"> BLOG </span>
                  MỖI NGÀY
                </h2>
                <div id="4diemden" />
                <h5 className="t-black bot-content">
                  ĐÓN CHỜ CÁC TIN TỨC TỪ NHỮNG ĐỊA ĐIỂM DU LỊCH
                </h5>
              </div>
            </div>
          </div>
          <div className="layout-content">
            <div className="box-container">
              <div className="box">
                <img src={blg1} alt="img-left" />
                <div className="content">
                  <h3>SAPA</h3>
                  <p>Kinh nghiệm du lịch Sapa 3 ngày 2 đêm từ A - Z</p>
                  <Link to="/blogsapa" className="btn">
                    CHI TIẾT
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-container">
              <div className="box">
                <img src={blg2} alt="img-left" />
                <div className="content">
                  <h3>ĐÀ LẠT</h3>
                  <p>Kinh nghiệm du lịch Đà Lạt 3 ngày 2 đêm từ A - Z</p>
                  <Link to="/blogdalat" className="btn">
                    CHI TIẾT
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-container">
              <div className="box">
                <img src={blg3} alt="img-left" />
                <div className="content">
                  <h3>VŨNG TÀU</h3>
                  <p>Kinh nghiệm du lịch Vũng Tàu 3 ngày 2 đêm từ A - Z</p>
                  <Link to="/blogvungtau" className="btn">
                    CHI TIẾT
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-container">
              <div className="box">
                <img src={blg4} alt="img-left" />
                <div className="content">
                  <h3>CẦN THƠ</h3>
                  <p>Kinh nghiệm du lịch Cần Thơ 3 ngày 2 đêm từ A - Z</p>
                  <Link to="/blogcantho" className="btn">
                    CHI TIẾT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
