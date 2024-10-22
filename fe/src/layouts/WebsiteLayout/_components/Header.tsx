import React from "react";
import "../../../styles/header.css";
import imageHeader from "../../../img/GoodTrip5.png"
const Header = () => {
  return (
    <header id="header">
      <div className="menu_top">
        <a href="/">
          <img src={imageHeader} alt="Logonav" />
        </a>
        <ul id="nav">
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="#">Tìm kiếm</a>
            <div className="container-1">
              <input
                className="subnav timkiem"
                type="search"
                placeholder="Tìm kiếm..."
              />
            </div>
          </li>
          <li>
            <a href="#services">
              Dịch vụ <i className="dow-icon ti-arrow-circle-down"></i>
            </a>
            <ul className="subnav">
              <li>
                <a href="/booking">Booking</a>
              </li>
              <li>
                <a href="/goidulich">Gói du lịch</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog">blog</a>
          </li>
          <li>
            <a href="/hotro">Hỗ trợ</a>
          </li>
        </ul>
        <div className="login-btn">
          <a href="/login">Đăng nhập</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
