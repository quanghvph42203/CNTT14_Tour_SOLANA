import React from "react";
import "../../../../styles/main.css";
import "../../../../styles/header.css";
import "../../../../styles/news.css";
import "../../../../styles/slider.css";
import "../../../../styles/blog.css";
import "../../../../styles/footer.css";
import blgsapa from "../../../../img/blogsapabaner.jpg"
import blgsapa1 from "../../../../img/blogsapa.jpg";
import blgsapa2 from "../../../../img/goidulich/fansipan.jpg";
import blgsapa3 from "../../../../img/blogsapa2.jpg";
import blgsapa4 from "../../../../img/sapa1.jpg";




const Blogsapa = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          <img src={blgsapa} alt="imgsapa" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Khám phá Sapa 3 ngày 2 đêm</h2>
            <div className="morebanner-btn">
              <a href="#timhieusapa">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>

      <div id="timhieusapa"></div>
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">KHÁM PHÁ TÂY BẮC</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  TRẢI NGHIỆM ĐẸP Ở <span className="t-gold">SAPA</span>
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
              <h2 id="gioithieusapa">I. Tổng quan về du lịch Sapa</h2>
              <p>
                Nằm ở miền núi phía Bắc, Sapa là điểm đến hấp dẫn với thiên
                nhiên hùng vĩ, khí hậu mát mẻ và văn hóa bản địa độc đáo. Đến
                với Sapa, bạn sẽ được chiêm ngưỡng những ruộng bậc thang trải
                dài, thăm các bản làng truyền thống và khám phá những cảnh quan
                tự nhiên tuyệt đẹp.
              </p>
              <div className="news-img">
                <img src={blgsapa4} alt="imgsapa1" />
                <div className="title-img">
                  Sapa yên bình trong sương (Ảnh: sưu tầm)
                </div>
              </div>
              <h4>Thời điểm thích hợp đến Sapa</h4>
              <p>
                Bạn có thể du lịch Sapa quanh năm, mỗi mùa ở đây đều có những
                nét đẹp riêng. Tháng 9-11 là thời điểm lúa chín, tháng 12-2 có
                tuyết rơi hoặc băng giá. Mùa xuân từ tháng 3-5, hoa đua nở khắp
                nơi, tạo nên khung cảnh rất lãng mạn.
              </p>

              <h2 id="choisapa">II. Lịch trình du lịch Sapa 3 ngày 2 đêm</h2>
              <h4>Ngày 1: Thăm các điểm nổi bật</h4>
              <p>
                Sáng: Tham quan nhà thờ Đá, phố Cầu Mây và chợ Sapa để khám phá
                văn hóa và đời sống của người dân địa phương. <br />
                Chiều: Ghé thăm bản Cát Cát, một bản làng yên bình với cảnh quan
                ruộng bậc thang đẹp mắt, tìm hiểu về nghề dệt thổ cẩm của người
                dân tộc H'Mông.
              </p>
              <div className="news-img">
                <img src={blgsapa1} alt="imgsapa2" />
                <div className="title-img">Bản Cát Cát (Ảnh: sưu tầm)</div>
              </div>

              <h4>Ngày 2: Đỉnh Fansipan - nóc nhà Đông Dương</h4>
              <p>
                Sáng: Di chuyển bằng cáp treo lên đỉnh Fansipan, ngắm nhìn toàn
                cảnh núi rừng Tây Bắc từ trên cao và chụp hình lưu niệm. <br />
                Chiều: Khám phá Thung lũng Mường Hoa, ngắm ruộng bậc thang hùng
                vĩ và tìm hiểu thêm về cuộc sống người dân bản địa.
              </p>
              <div className="news-img">
                <img src={blgsapa2} alt="imgsapa3" />
                <div className="title-img">Đỉnh Fansipan (Ảnh: sưu tầm)</div>
              </div>

              <h4>Ngày 3: Tự do khám phá Sapa</h4>
              <p>
                Sáng: Dành thời gian tham quan Thác Bạc và Thác Tình Yêu. Đây là
                những thác nước nổi tiếng với vẻ đẹp hoang sơ và thơ mộng.{" "}
                <br />
                Chiều: Mua sắm tại chợ Sapa trước khi kết thúc chuyến đi.
              </p>
              <div className="news-img">
                <img src={blgsapa3} alt="imgsapa4" />
                <div className="title-img">Thác Bạc (Ảnh: sưu tầm)</div>
              </div>

              <h2 id="ansapa">III. Ăn gì khi du lịch Sapa?</h2>
              <ul>
                <li>
                  <h4>Thắng cố</h4>
                </li>
                <li>
                  <h4>Lợn cắp nách nướng</h4>
                </li>
                <li>
                  <h4>Cá hồi, cá tầm</h4>
                </li>
                <li>
                  <h4>Xôi ngũ sắc</h4>
                </li>
                <li>
                  <h4>Cơm lam</h4>
                </li>
                <li>
                  <h4>Thịt trâu gác bếp</h4>
                </li>
              </ul>

              <h2 id="tongketsapa">IV. Tổng kết</h2>
              <p>
                Sapa là điểm đến lý tưởng cho những ai yêu thiên nhiên và muốn
                tìm hiểu về văn hóa dân tộc. Hy vọng bạn sẽ có chuyến du lịch
                Sapa 3 ngày 2 đêm thật vui vẻ và nhiều kỷ niệm.
              </p>
            </div>
          </div>
          <div className="col4">
            <div className="sidenav">
              <h3 className="header-sidenav">Nội dung chính</h3>
              <ul className="newslist" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#gioithieusapa">I. Tổng quan về du lịch Sapa</a>
                </li>
                <li>
                  <a href="#choisapa">II. Lịch trình 3 ngày 2 đêm</a>
                </li>
                <li>
                  <a href="#ansapa">III. Ăn gì khi du lịch Sapa?</a>
                </li>
                <li>
                  <a href="#tongketsapa">IV. Tổng kết</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsapa;
