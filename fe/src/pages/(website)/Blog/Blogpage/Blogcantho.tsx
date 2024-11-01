import React from "react";
import "../../../../styles/main.css";
import "../../../../styles/header.css";
import "../../../../styles/news.css";
import "../../../../styles/slider.css";
import "../../../../styles/blog.css";
import "../../../../styles/footer.css";
import blogcantho from "../../../../img/blogcanthobanner.webp";
import blogcantho1 from "../../../../img/blogcantho1.jpg";
import blogcantho2 from "../../../../img/blogcantho2.jpg";
import blogcantho3 from "../../../../img/blogcantho3.jpg";
import blogcantho4 from "../../../../img/blogcantho4.jpg";

const Blogcantho = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          <img src={blogcantho} alt="imgcantho" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Khám phá Cần Thơ 3 ngày 2 đêm</h2>
            <div className="morebanner-btn">
              <a href="#timhieucantho">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>

      <div id="timhieucantho"></div>
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">KHÁM PHÁ CẦN THƠ</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  TRẢI NGHIỆM ĐẸP Ở <span className="t-gold">CẦN THƠ</span>
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
              <h2 id="gioithieucantho">I. Tổng quan về du lịch Cần Thơ</h2>
              <p>
                Cần Thơ, thủ phủ của miền Tây sông nước, nổi tiếng với chợ nổi
                Cái Răng, vườn trái cây trĩu quả, và những con người hiền hòa,
                mến khách. Đây là địa điểm lý tưởng cho những ai muốn khám phá
                nét đẹp văn hóa sông nước.
              </p>
              <div className="news-img">
                <img src={blogcantho1} alt="imgcantho1" />
                <div className="title-img">Chợ nổi Cái Răng (Ảnh: sưu tầm)</div>
              </div>
              <h4>Thời điểm thích hợp đến Cần Thơ</h4>
              <p>
                Cần Thơ có thể ghé thăm quanh năm, nhưng thời điểm tốt nhất là
                từ tháng 5 đến tháng 11 khi có mùa trái cây chín rộ và thời tiết
                mát mẻ.
              </p>

              <h2 id="choicantho">
                II. Lịch trình du lịch Cần Thơ 3 ngày 2 đêm
              </h2>
              <h4>Ngày 1: Tham quan chợ nổi Cái Răng và bến Ninh Kiều</h4>
              <p>
                Sáng: Tham quan chợ nổi Cái Răng, trải nghiệm mua bán trên sông
                và thưởng thức các món ăn đặc sản. <br />
                Chiều: Tham quan bến Ninh Kiều và thưởng thức cảnh hoàng hôn
                tuyệt đẹp bên sông Hậu.
              </p>
              <div className="news-img">
                <img src={blogcantho2} alt="imgcantho2" />
                <div className="title-img">Bến Ninh Kiều (Ảnh: sưu tầm)</div>
              </div>

              <h4>
                Ngày 2: Tham quan vườn trái cây và Thiền viện Trúc Lâm Phương
                Nam
              </h4>
              <p>
                Sáng: Ghé thăm vườn trái cây Mỹ Khánh, tận hưởng không khí trong
                lành và thưởng thức trái cây tươi ngon. <br />
                Chiều: Tham quan Thiền viện Trúc Lâm Phương Nam, nơi mang lại
                không gian yên bình, thanh tịnh.
              </p>
              <div className="news-img">
                <img src={blogcantho3} alt="imgcantho3" />
                <div className="title-img">
                  Thiền viện Trúc Lâm (Ảnh: sưu tầm)
                </div>
              </div>

              <h4>Ngày 3: Tự do khám phá và mua sắm</h4>
              <p>
                Sáng: Tham quan làng du lịch Mỹ Khánh, trải nghiệm cuộc sống của
                người dân miền Tây. <br />
                Chiều: Mua sắm đặc sản Cần Thơ tại các khu chợ nổi tiếng trước
                khi kết thúc chuyến đi.
              </p>
              <div className="news-img">
                <img src={blogcantho4} alt="imgcantho4" />
                <div className="title-img">Đặc sản Cần Thơ (Ảnh: sưu tầm)</div>
              </div>

              <h2 id="ancantho">III. Ăn gì khi du lịch Cần Thơ?</h2>
              <ul>
                <li>
                  <h4>Bánh xèo</h4>
                </li>
                <li>
                  <h4>Lẩu mắm</h4>
                </li>
                <li>
                  <h4>Ốc nướng tiêu</h4>
                </li>
                <li>
                  <h4>Nem nướng Cần Thơ</h4>
                </li>
              </ul>

              <h2 id="tongketcantho">IV. Tổng kết</h2>
              <p>
                Cần Thơ là điểm đến lý tưởng cho kỳ nghỉ ngắn ngày. Chúc bạn có
                một chuyến đi 3 ngày 2 đêm đầy trải nghiệm thú vị!
              </p>
            </div>
          </div>
          <div className="col4">
            <div className="sidenav">
              <h3 className="header-sidenav">Nội dung chính</h3>
              <ul className="newslist" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#gioithieucantho">I. Tổng quan về du lịch Cần Thơ</a>
                </li>
                <li>
                  <a href="#choicantho">II. Lịch trình 3 ngày 2 đêm</a>
                </li>
                <li>
                  <a href="#ancantho">III. Ăn gì khi du lịch Cần Thơ?</a>
                </li>
                <li>
                  <a href="#tongketcantho">IV. Tổng kết</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcantho;
