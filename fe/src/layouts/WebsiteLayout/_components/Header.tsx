import React, { useState, useEffect, useRef } from "react";
import "../../../styles/header.css";
import "../../../styles/cart.css";
import imageHeader from "../../../img/GoodTrip5.png";
import instance from "@/configs/axios";

const Header = () => {
    const users = JSON.parse(localStorage.getItem("user") || "null");
    const [openAccount, setOpenAccount] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); // Sản phẩm trong giỏ hàng
    const accountRef = useRef(null);
    const cartRef = useRef(null);

    const handleLogout = async () => {
        // localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.reload();
    };

    const handleClickOutside = (event: any) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setOpenAccount(false);
        }
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCartOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                        <a href="/tour">Gói du lịch</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contact">Hỗ trợ</a>
                    </li>
                </ul>

                {users ? (
                    <>
                        <div
                            ref={accountRef}
                            className="box_account"
                            onClick={() => setOpenAccount(!openAccount)}
                        >
                            Hello, {users.referenceId}
                            <span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <div
                            className={`box_account_info ${openAccount ? "active" : ""}`}
                        >
                            {/* <p>
                                <a href="/user/tours">Xem tour đã đặt</a>
                            </p> */}
                            <button
                                onClick={handleLogout}
                                className="logout-btn"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="login-btn">
                        <a href="/login">Đăng nhập</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
