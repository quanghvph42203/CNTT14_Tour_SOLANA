import React from "react";
import "../../../styles/main.css";
import "../../../styles/header.css";
import "../../../styles/news.css";
import "../../../styles/slider.css";
import "../../../styles/blog.css";
import "../../../styles/footer.css";
import imgvungtau from "../../../img/DaNang.png";
import imgvungtau1 from "../../../img/Vungtauimg/vungtau1.png";
import imgvungtau2 from "../../../img/Vungtauimg/vungtau2.png";
import imgvungtau3 from "../../../img/Vungtauimg/vungtau3.png";
import imgvungtau4 from "../../../img/Vungtauimg/vungtau4.png";
import imgvungtau5 from "../../../img/Vungtauimg/vungtau5.png";
import imgvungtau6 from "../../../img/Vungtauimg/vungtau6.png";
const Vungtau = () => {
  return (
    <div>
      <div id="slider">
        <div className="banner-section">
          <img src={imgvungtau} alt="imgvungtau" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Thích đi biển - Đã có Vũng Tàu</h2>
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
                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  DU LỊCH BIỂN Ở<span className="t-gold"> VŨNG TÀU</span>
                </h2>
                <h5 className="t-black bot-content">
                  MUỐN ĐI NHANH HÃY ĐI MỘT MÌNH | MUỐN ĐI XA HÃY ĐI CÙNG
                  GOODTRIP
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="news-col">
          <div className="col8">
            <div className="news-content">
              <p>
                Vũng Tàu mảnh đất du lịch biển bình dị, tươi đẹp. Nếu một ngày
                bạn đang cảm thấy mệt mỏi với những bộn bề cuộc sống, hãy “chạy
                trốn” phố thị xa hoa về với Vũng Tàu hoà mình vào dòng nước biển
                trong xanh, quên hết âu lo muộn phiền. Du lịch Vũng Tàu hay du
                lịch bất cứ nơi đâu thì điểm vui chơi, nơi nghỉ ngơi, và ẩm thực
                luôn là vấn đề được du khách quan tâm.
              </p>
              <div className="news-img">
                <img src={imgvungtau1} alt="imgvungtau1" />
                <div className="title-img">Vũng tàu về đêm (Ảnh: sưu tầm)</div>
              </div>
              <h2 id="gioithieuvungtau">I. Tổng quan về du lịch Vũng Tàu</h2>
              <h4>Đôi nét về vũng tàu</h4>
              <p>
                Cách trung tâm thành phố Hồ Chí Minh khoảng 125km, TP. Vũng Tàu
                có đường bờ biển dài 20km, là điểm du lịch yêu thích ở phía Nam.
                <br />
                <br />
                Đến với Vũng Tàu bạn sẽ cảm thấy bình yên, dễ chịu với những con
                đường rộng rãi, thoáng đãng, những bãi biển xanh rì rào sóng vỗ,
                những ngọn núi to nhỏ khác nhau, những ngôi chùa thanh tịnh,…
                Tất cả khiến Vũng Tàu trở nên nổi bật với nhiều danh lam thắng
                cảnh nổi tiếng.
              </p>
              <h4>Thời điểm thích hợp để đến Vũng Tàu</h4>
              <p>
                Vũng Tàu thuộc khí hậu nhiệt đới gió mùa, chia làm mùa mưa và
                mùa khô rõ rệt. Bạn nên du lịch Vũng Tàu vào mùa khô để thuận
                tiện cho việc đi lại và tham quan. Thế nhưng đi du lịch vào mùa
                mưa cũng có điểm thú vị và lãng mạn riêng của nó.
                <br />
                <br />
                Nhiệt độ Vũng Tàu quanh năm khá ôn hòa không quá lạnh hay quá
                nóng. Bạn chỉ cần theo dõi bản tin dự báo thời tiết Vũng tàu 10
                ngày tới để tránh khi có bão. Ngoài ra, vào ngày cuối tuần, các
                dịp lễ tết, Vũng Tàu thu hút đông đảo khách du lịch, nên giá cả
                các dịch vụ đều tăng cao.
              </p>
              <h2 id="choivungtau">II. Du lịch Vũng Tàu đi đâu chơi?</h2>
              <p>
                Có vô số địa điểm du lịch Vũng Tàu, để có thể vui chơi, khám phá
                hết nơi đây thì chắc chắn bạn phải dành rất nhiều thời gian cho
                Vũng Tàu đó nhé. Nếu chỉ du lịch Vũng Tàu 1 ngày bạn có thể lựa
                chọn những địa điểm ngay tại thành phố Vũng Tàu để đỡ mất nhiều
                thời gian di chuyển. Dưới đây là một số địa điểm “hot” được dân
                du lịch ưa thích và ghé thăm nhiều nhất khi đến Vũng Tàu.
              </p>
              <h4>Ngọn hải đăng</h4>
              <p>
                Địa chỉ: Nằm trên đỉnh núi Nhỏ, phường 2, TP. Vũng Tàu.
                <br />
                <br />
                Đường lên ngọn hải đăng ngoằn ngoèo nhưng cực kỳ thơ mộng. Hai
                bên đường rất đẹp, nhiều cây cối, tầm nhìn hướng ra Bãi Trước,
                đường dốc thoai thoải. Bạn có thể gửi xe dưới chân đường rồi đi
                bộ hoặc đi xe thẳng lên dốc luôn. Thấy nơi nào có cảnh đẹp có
                thể vừa đi vừa dừng lại chụp hình.
              </p>
              <div className="news-img">
                <img src={imgvungtau2} alt="imgvungtau2" />
                <div className="title-img">Ngọn hải đăng</div>
              </div>
              <p>
                Vào mùa xuân, những cây bông gòn trổ hoa trắng cả góc trời. Hay
                vào buổi sáng đón bình minh với ánh nắng nhẹ dịu và chụp những
                tấm hình “sống ảo” ở đây cực chất.
                <br />
                <br />
                Hải Đăng được xem như một biểu tượng của thành phố biển Vũng
                Tàu. Với lối kiến trúc cổ xưa, Hải Đăng là một tháp hình trụ cao
                18m, đường kính 3m, sơn màu trắng tinh. Bên trong ngọn hải đăng
                có cầu thang dẫn lên đến gần đỉnh, đứng trên đó có thể ngắm nhìn
                toàn cảnh Vũng Tàu.
              </p>
              <h4>Biển Long Hải</h4>
              <p>
                Địa chỉ: Nằm cách TP. Vũng Tàu 12km.
                <br />
                <br />
                Biển Long Hải như một bức tranh thiên nhiên hoang sơ, kỳ vỹ đã
                níu chân bao du khách khi đến Vũng Tàu. Khí hậu tại Long Hải mát
                mẻ quanh năm nên bạn có thể đến biển Long Hải vào bất cứ thời
                điểm nào trong năm.
                <br />
                <br />
                Nước biển nơi đây trong xanh, cát vàng trải dài và không thiếu
                các khu resort gần biển. Bao quanh biển là những dải núi hay
                rừng hoa anh đào toả hương khoe sắc, càng khiến biển Long Hải
                thêm phần mộng mơ. Đặc biệt hải sản ở đây rất tươi ngon mà giá
                lại rẻ.
              </p>
              <h4>Khu đồi Con Heo</h4>
              <p>
                Địa chỉ: Hẻm 222 Phan Chu Trinh, Phường 2, TP. Vũng Tàu.
                <br />
                <br />
                Trước kia, đồi Con Heo là nơi khai thác đá nên ít người lui tới.
                Những năm gần đây, ngọn đồi với cái tên dễ thương này trở thành
                điểm đến lý thú để vui chơi, thưởng ngoạn cảnh quan và chụp
                hình.
              </p>
              <div className="news-img">
                <img src={imgvungtau3} alt="imgvungtau3" />
                <div className="title-img">Đồi Con Heo</div>
              </div>
              <p>
                Đồi Con Heo với nét hoang sơ, cùng con đường sỏi đá bí ẩn, chút
                hoang dại của đồi cỏ khô và sự rộng lớn của biển trời,… tất cả
                tạo nên sức hấp dẫn thu hút bao khách du lịch.
              </p>
              <h4>Mũi Nghinh Phong</h4>
              <p>
                Địa chỉ: số 1 đường Hạ Long, TP. Vũng Tàu <br />
                <br />
                Mũi Nghinh Phong là mũi đất vươn dài nhất ở phía Nam của bán đảo
                Vũng Tàu. Nơi đây đón gió suốt bốn mùa quanh năm đúng như tên
                gọi Nghinh Phong. Du khách tìm đến mũi Nghinh Phong để nghỉ
                ngơi, thư giãn tắm biển. Hai bãi tắm Vọng Nguyệt và bãi Hương
                Phong do mũi Nghinh Phong tạo ra rất đẹp, nước biển trong và
                sạch, không khí trong lành, mát mẻ.
              </p>
              <div className="news-img">
                <img src={imgvungtau4} alt="imgvungtau4" />
                <div className="title-img">Mũi Nghinh Phong</div>
              </div>
              <h4>Hòn Bà</h4>
              <p>
                Địa chỉ: Nằm ở Bãi Sau, Tp. Vũng Tàu.
                <br />
                <br />
                Hòn Bà được ví như một hòn đảo nhỏ, diện tích khoảng 5.000m2.
                Trên đảo, khi thủy triều xuống thấp, men theo lối đường đá ra
                đảo bạn sẽ gặp một ngôi miếu nhỏ là Miếu Hòn Bà. Đây được cho là
                nơi linh thiêng luôn nghi ngút khói hương, là nơi thờ cúng, cầu
                cho những chuyến đi biển thuận buồm xuôi gió của ngư dân địa
                phương.
              </p>
              <div className="news-img">
                <img src={imgvungtau5} alt="imgvungtau5" />
                <div className="title-img" />
              </div>
              <h4>Hồ Đá Xanh</h4>
              <p>
                Địa chỉ: Gần sườn núi Dinh, thuộc huyện Tân Thành.
                <br />
                <br />
                Hồ đá xanh thu hút du khách bởi sắc xanh hiếm có. Đây là điểm du
                lịch mà nhiều cặp đôi đến chụp hình cưới, các bạn trẻ đến chụp
                hình “sống ảo”. Có nhiều chi tiết đơn giản mà đẹp như xích đu gỗ
                cầu gỗ, thuyền hoa, và cả đàn cừu hiền dịu dễ thương. Tất cả đều
                khiến mọi người mê mẩn. Hồ Đá Xanh Vũng Tàu còn được dân du lịch
                đặt tên là Tuyệt Tình Cốc của Vũng Tàu đấy.
              </p>
              <div className="news-img">
                <img src={imgvungtau6} alt="imgvungtau6" />
                <div className="title-img">Hồ Đá Xanh</div>
              </div>
              <h2 id="anvungtau">III. Ăn gì khi du lịch Vũng Tàu?</h2>
              <p>
                Sau khi đến các địa điểm vui chơi đã thấm mệt và cảm thấy đói
                bụng, hãy đi khám phá ẩm thực Vũng Tàu ngay thôi. Sau đây là một
                số món ngon đến Vũng Tàu nhất định phải thử và địa chỉ các quán
                ăn để bạn ghé đến nhé!
              </p>
              <ul>
                <li>
                  <h4>Hải sản</h4>
                </li>
                <li>
                  <h4>Bánh khọt gốc Vú Sữa</h4>
                </li>
                <li>
                  <h4>Lẩu cá đuối</h4>
                </li>
                <li>
                  <h4>Bánh bông lan gốc Cột Điện</h4>
                </li>
                <li>
                  <h4>Bánh canh Long Hương</h4>
                </li>
                <li>
                  <h4>Kem bơ sầu riêng</h4>
                </li>
                <li>
                  <h4>Các loại thức ăn ở khu chợ đêm</h4>
                </li>
              </ul>
              <h2 id="tongketvungtau">VI. Tổng kết</h2>
              <p>
                Du lịch Vũng Tàu ngày càng được du khách yêu thích. Cảnh đẹp
                thiên nhiên miền biển và con người nơi đây luôn để lại cho du
                khách những kỷ niệm khó phai. Còn chần chừ gì nữa mà không xách
                vali lên và đi. Chúc các bạn có chuyến đi vui vẻ!
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
                  <a href="#choivungtau">II. Du lịch Vũng Tàu đi đâu chơi?</a>
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

export default Vungtau;
