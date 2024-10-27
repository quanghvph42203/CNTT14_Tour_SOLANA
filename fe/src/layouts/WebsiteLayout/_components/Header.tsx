<<<<<<< HEAD
import React, { useState } from "react";
import "../../../styles/header.css";
import imageHeader from "../../../img/GoodTrip5.png";
import instance from "@/configs/axios";
const Header = () => {
    const users = JSON.parse(localStorage.getItem("user") as string);
    const [openAccount, setOpenAccount] = useState(false);
    console.log(openAccount);
    const handleLogout = async () => {
        await instance.post("/auth/logOut");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.reload();
    };
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
                            Dịch vụ{" "}
                            <i className="dow-icon ti-arrow-circle-down"></i>
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
                {users ? (
                    <>
                        <div
                            className="box_account"
                            onClick={() => setOpenAccount(!openAccount)}
                        >
                            Hello, {users.name}
                            <span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <div
                            className={`box_account_info ${openAccount ? "active" : ""}`}
                        >
                            <p>Xem tour đã đặt</p>
                            <p onClick={handleLogout}>Logout</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="login-btn">
                            <a href="/login">Đăng nhập</a>
                        </div>
                    </>
                )}
            </div>
        </header>
    );

};

export default Header;
