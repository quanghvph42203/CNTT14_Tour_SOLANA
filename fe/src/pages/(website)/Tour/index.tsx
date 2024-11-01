import React from 'react'
import "../../../styles/main.css";
import "../../../styles/header.css";
import "../../../styles/content.css";
import "../../../styles/news.css";
import "../../../styles/slider.css";
import "../../../styles/blog.css";
import "../../../styles/goidulich.css";
import "../../../styles/footer.css";
import image5 from "../../../img/goidulich/phuquoc.jpg";
import image6 from "../../../img/goidulich/sapa.jpg";
import image7 from "../../../img/goidulich/vungtau1.jpg";
import image8 from "../../../img/goidulich/dalat.png";
import image9 from "../../../img/goidulich/sanho.jpg";
import image10 from "../../../img/goidulich/dao.jpg";
import image11 from "../../../img/goidulich/mientay.jpg";
import image12 from "../../../img/goidulich/nganhoa.jpg";
import image13 from "../../../img/goidulich/mieubachuaxu.jpg";
import image14 from "../../../img/goidulich/bentre.jpg";
import image15 from "../../../img/goidulich/sapa1.jpg";
import image16 from "../../../img/goidulich/caonguyen.jpg";
import image17 from "../../../img/goidulich/taynguyen.jpg";
import image18 from "../../../img/goidulich/fansipan.jpg";
import image19 from "../../../img/goidulich/duthuyen.jpg";
const Tour = () => {
  return (
    <div id="main">
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  CÙNG XEM QUA CÁC
                  <span className="t-gold"> GÓI DU LỊCH</span>
                </h2>
                <h5 className="t-black bot-content">
                  XÁCH BALO LÊN VÀ ĐI THÔI NÀO!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="packages">
        <div className="box-container">
          <div className="box">
            <img src={image5} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Vũng Tàu
              </h3>
              <p>Tour Vũng Tàu 3N2D: HCM - Câu Cá - Lặn Ngắm San Hô</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                3.600.000 VND <span> 3.800.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image6} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Sapa
              </h3>
              <p>
                Tour Miền Bắc 4N3D: HCM - Hạ Long - Ninh Bình - Sapa - Hà Nội
                (TN)
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="price">
                6.900.000 VND <span> 7.200.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image7} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Vũng Tàu
              </h3>
              <p>Tour Vũng Tàu 2N1D: HCM - Vũng Tàu - Suối Tiên - Hòn Rơm</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                1.600.000 VND <span>1.700.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image8} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Đà Lạt
              </h3>
              <p>Tour Đà Lạt 3N3D: Tà Đùng - Buôn Mê Thuột - Thác Dray Nu</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                2.390.000 VND <span>4.000.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image9} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Vũng Tàu
              </h3>
              <p>Tour Vũng Tàu 2N2D: Lặn Ngắm San Hô - BBQ - Vườn Nho</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                1.490.000 VND <span>1.600.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image10} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Vũng Tàu
              </h3>
              <p>Tour Vũng Tàu 2N2D: Khám phá đảo Tôm Hùm Cano</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                2.300.000 VND <span>2.500.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image11} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Cần Thơ
              </h3>
              <p>Tour Miền Tây 4N3D: Châu Đốc - Cần Thơ - Cà Mau - Bạc Liêu</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                Hết chỗ <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image12} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Đà Lạt
              </h3>
              <p>Tour Đà Lạt 3N3Đ: Khám Phá Thành Phố Ngàn Hoa</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                2.090.000 VND <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image13} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Miền Tây
              </h3>
              <p>
                Tour Miền Tây 1N1D: Miếu Bà Chúa Xứ - Rừng Tràm Trà Sư - KDL Mặt
                Trời An Hảo
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                990.000 VND <span>1.000.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image14} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Miền Tây
              </h3>
              <p>Tour Miền Tây 2N1D: HCM - Mỹ Tho - Bến Tre - Cần Thơ</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                1.200.000 VND <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image15} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Miền Bắc
              </h3>
              <p>Tour Miền Bắc 4N3D: Sài Gòn - Hoàng Su Phì - Y Tý - Sapa</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                Hết chỗ <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image16} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Đà Lạt
              </h3>
              <p>
                Tour Đà Lạt 3N3D: Que Garden - Tiểu Nhật Bản Xứ Cao Nguyên (Tết)
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="price">
                Hết chỗ <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image17} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Tây Nguyên
              </h3>
              <p>Tour Tây Nguyên 3N3D: Tà Đùng - Đà Lạt ( 2 Sao)</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="price">
                2.090.000 VND <span> 2.500.000 VND</span>
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image18} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Sapa
              </h3>
              <p>Tour SaPa 3N2D: Chinh Phục Fansipan</p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="price">
                3.990.000 VND <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
          <div className="box">
            <img src={image19} />
            <div className="content">
              <h3>
                <i className="fas fa-map-marker-alt" /> Vũng Tàu
              </h3>
              <p>
                Tour Cao Cấp Vũng Tàu 1/2N: Du Thuyền Emperor Ngắm Hoàng Hôn -
                Tiệc Cocktail
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="price">
                1.100.000 VND <span />
              </div>
              <a href="booking.html" className="btn">
                Đặt ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;