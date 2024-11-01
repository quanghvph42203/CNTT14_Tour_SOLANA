import React from "react";
import "../../../../styles/main.css";
import "../../../../styles/header.css";
import "../../../../styles/news.css";
import "../../../../styles/slider.css";
import "../../../../styles/blog.css";
import "../../../../styles/footer.css";
import blogvungtau from "../../../../img/blogvungtaubanner.jpg"
import blogvungtau1 from "../../../../img/Vungtauimg/vungtau1.png";
import blogvungtau2 from "../../../../img/blogvungtau1.jpg";
import blogvungtau3 from "../../../../img/blogvungtau2.webp";
import blogvungtau4 from "../../../../img/blogvungtau3.webp";

const Blogvungtau = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          <img src={blogvungtau} alt="imgvungtau" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Khám phá Vũng Tàu 3 ngày 2 đêm</h2>
            <div className="morebanner-btn">
              <a href="#timhieuvungtau">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>

      <div id="timhieuvungtau"></div>
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">KHÁM PHÁ VŨNG TÀU</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  TRẢI NGHIỆM ĐẸP Ở <span className="t-gold">VŨNG TÀU</span>
                </h2>
                <h5 className="t-black bot-content">
                  ĐI ĐỂ TRẢI NGHIỆM, KHÁM PHÁ VÀ THƯ GIÃN
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="news-col">
          <div className="col8">
            <div className="news-content">
              <h2 id="gioithieuvungtau">I. Tổng quan về du lịch Vũng Tàu</h2>
              <p>
                Vũng Tàu, thành phố biển nổi tiếng với bãi cát trắng, nước biển
                xanh trong, và không khí trong lành. Đây là điểm đến lý tưởng
                cho những ai muốn thư giãn, tắm biển và tận hưởng các món hải
                sản tươi ngon.
              </p>
              <div className="news-img">
                <img src={blogvungtau1} alt="imgvungtau1" />
                <div className="title-img">
                  Bãi biển Vũng Tàu tuyệt đẹp (Ảnh: sưu tầm)
                </div>
              </div>
              <h4>Thời điểm thích hợp đến Vũng Tàu</h4>
              <p>
                Vũng Tàu có thể ghé thăm quanh năm, nhưng thời điểm tốt nhất là
                từ tháng 11 đến tháng 4 khi thời tiết mát mẻ và ít mưa.
              </p>

              <h2 id="choivungtau">
                II. Lịch trình du lịch Vũng Tàu 3 ngày 2 đêm
              </h2>
              <h4>Ngày 1: Khám phá trung tâm Vũng Tàu</h4>
              <p>
                Sáng: Tham quan Tượng Chúa Kitô Vua và ngắm nhìn toàn cảnh Vũng
                Tàu từ trên cao. <br />
                Chiều: Ghé thăm Bạch Dinh, nơi lưu giữ dấu ấn lịch sử độc đáo.
              </p>
              <div className="news-img">
                <img src={blogvungtau2} alt="imgvungtau2" />
                <div className="title-img">Bạch Dinh (Ảnh: sưu tầm)</div>
              </div>

              <h4>Ngày 2: Tham quan các điểm nổi bật</h4>
              <p>
                Sáng: Tham quan Mũi Nghinh Phong, nơi có cảnh quan hùng vĩ, thu
                hút nhiều du khách. <br />
                Chiều: Ghé biển Long Hải và tận hưởng không gian biển rộng lớn,
                yên bình.
              </p>
              <div className="news-img">
                <img src={blogvungtau3} alt="imgvungtau3" />
                <div className="title-img">Mũi Nghinh Phong (Ảnh: sưu tầm)</div>
              </div>

              <h4>Ngày 3: Tự do khám phá Vũng Tàu</h4>
              <p>
                Sáng: Tham quan Đồi Con Heo và thưởng ngoạn cảnh biển từ trên
                cao. <br />
                Chiều: Mua sắm và ăn uống tại chợ hải sản Vũng Tàu trước khi kết
                thúc chuyến đi.
              </p>
              <div className="news-img">
                <img src={blogvungtau4} alt="imgvungtau4" />
                <div className="title-img">
                  Chợ hải sản Vũng Tàu (Ảnh: sưu tầm)
                </div>
              </div>

              <h2 id="anvungtau">III. Ăn gì khi du lịch Vũng Tàu?</h2>
              <ul>
                <li>
                  <h4>Bánh khọt</h4>
                </li>
                <li>
                  <h4>Lẩu cá đuối</h4>
                </li>
                <li>
                  <h4>Ốc vú nàng</h4>
                </li>
                <li>
                  <h4>Hải sản tươi sống</h4>
                </li>
              </ul>

              <h2 id="tongketvungtau">IV. Tổng kết</h2>
              <p>
                Vũng Tàu là điểm đến hoàn hảo cho kỳ nghỉ biển ngắn ngày. Chúc
                bạn có một chuyến đi 3 ngày 2 đêm thật thú vị và đáng nhớ!
              </p>
            </div>
          </div>
          <div className="col4">
            <div className="sidenav">
              <h3 className="header-sidenav">Nội dung chính</h3>
              <ul className="newslist" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#gioithieuvungtau">
                    I. Tổng quan về du lịch Vũng Tàu
                  </a>
                </li>
                <li>
                  <a href="#choivungtau">II. Lịch trình 3 ngày 2 đêm</a>
                </li>
                <li>
                  <a href="#anvungtau">III. Ăn gì khi du lịch Vũng Tàu?</a>
                </li>
                <li>
                  <a href="#tongketvungtau">IV. Tổng kết</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogvungtau;
