import React from "react";
import "../../../../styles/main.css";
import "../../../../styles/header.css";
import "../../../../styles/news.css";
import "../../../../styles/slider.css";
import "../../../../styles/blog.css";
import "../../../../styles/footer.css";
import blogdalat from "../../../../img/goidulich/nganhoa.jpg"
import blogdalat1 from "../../../../img/blogdalat1.jpg";
import blogdalat2 from "../../../../img/blogdalat2.jpg";
import blogdalat3 from "../../../../img/blogdalat3.jpg";
import blogdalat4 from "../../../../img/blogdalat4.jpg";

const Blogdalat = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          <img src={blogdalat} alt="imgdalat" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Khám phá Đà Lạt 3 ngày 2 đêm</h2>
            <div className="morebanner-btn">
              <a href="#timhieudalat">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>

      <div id="timhieudalat"></div>
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">KHÁM PHÁ ĐÀ LẠT</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  TRẢI NGHIỆM ĐẸP Ở <span className="t-gold">ĐÀ LẠT</span>
                </h2>
                <h5 className="t-black bot-content">
                  ĐI ĐỂ TRẢI NGHIỆM, KHÁM PHÁ VÀ YÊU THƯƠNG
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="news-col">
          <div className="col8">
            <div className="news-content">
              <h2 id="gioithieudalat">I. Tổng quan về du lịch Đà Lạt</h2>
              <p>
                Đà Lạt, thành phố của ngàn hoa, nổi tiếng với không khí trong
                lành, mát mẻ và cảnh quan lãng mạn. Với những điểm tham quan như
                hồ Xuân Hương, thung lũng Tình Yêu, và nhiều công trình kiến
                trúc Pháp, Đà Lạt là điểm đến lý tưởng cho những ai muốn thư
                giãn và khám phá.
              </p>
              <div className="news-img">
                <img src={blogdalat1} alt="imgdalat1" />
                <div className="title-img">
                  Đà Lạt thơ mộng trong sương (Ảnh: sưu tầm)
                </div>
              </div>
              <h4>Thời điểm thích hợp đến Đà Lạt</h4>
              <p>
                Đà Lạt đẹp quanh năm, nhưng thời gian lý tưởng nhất là từ tháng
                10 đến tháng 3 khi thời tiết se lạnh và trăm hoa đua nở.
              </p>

              <h2 id="choidalat">II. Lịch trình du lịch Đà Lạt 3 ngày 2 đêm</h2>
              <h4>Ngày 1: Khám phá trung tâm Đà Lạt</h4>
              <p>
                Sáng: Tham quan hồ Xuân Hương và chợ Đà Lạt, nơi bạn có thể trải
                nghiệm văn hóa địa phương. <br />
                Chiều: Ghé thăm nhà thờ Con Gà và Dinh Bảo Đại để tìm hiểu về
                lịch sử của Đà Lạt.
              </p>
              <div className="news-img">
                <img src={blogdalat2} alt="imgdalat2" />
                <div className="title-img">Nhà thờ Con Gà (Ảnh: sưu tầm)</div>
              </div>

              <h4>Ngày 2: Tham quan các điểm nổi bật</h4>
              <p>
                Sáng: Tham quan Thung lũng Tình Yêu, nơi có cảnh quan thơ mộng
                và hoa nở rực rỡ. <br />
                Chiều: Ghé đồi Mộng Mơ và chùa Linh Phước để chụp hình và tận
                hưởng không gian yên bình.
              </p>
              <div className="news-img">
                <img src={blogdalat3} alt="imgdalat3" />
                <div className="title-img">
                  Thung lũng Tình Yêu (Ảnh: sưu tầm)
                </div>
              </div>

              <h4>Ngày 3: Tự do khám phá Đà Lạt</h4>
              <p>
                Sáng: Tham quan Làng Cù Lần và trải nghiệm văn hóa dân tộc K'Ho.{" "}
                <br />
                Chiều: Mua sắm tại chợ Đà Lạt trước khi kết thúc chuyến đi.
              </p>
              <div className="news-img">
                <img src={blogdalat4} alt="imgdalat4" />
                <div className="title-img">Chợ Đà Lạt (Ảnh: sưu tầm)</div>
              </div>

              <h2 id="andalat">III. Ăn gì khi du lịch Đà Lạt?</h2>
              <ul>
                <li>
                  <h4>Bánh mì xíu mại</h4>
                </li>
                <li>
                  <h4>Lẩu gà lá é</h4>
                </li>
                <li>
                  <h4>Bánh tráng nướng</h4>
                </li>
                <li>
                  <h4>Nem nướng Đà Lạt</h4>
                </li>
              </ul>

              <h2 id="tongketdalat">IV. Tổng kết</h2>
              <p>
                Đà Lạt là thành phố của tình yêu và những trải nghiệm đáng nhớ.
                Chúc bạn có một chuyến đi 3 ngày 2 đêm vui vẻ và nhiều kỷ niệm!
              </p>
            </div>
          </div>
          <div className="col4">
            <div className="sidenav">
              <h3 className="header-sidenav">Nội dung chính</h3>
              <ul className="newslist" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#gioithieudalat">I. Tổng quan về du lịch Đà Lạt</a>
                </li>
                <li>
                  <a href="#choidalat">II. Lịch trình 3 ngày 2 đêm</a>
                </li>
                <li>
                  <a href="#andalat">III. Ăn gì khi du lịch Đà Lạt?</a>
                </li>
                <li>
                  <a href="#tongketdalat">IV. Tổng kết</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdalat;
