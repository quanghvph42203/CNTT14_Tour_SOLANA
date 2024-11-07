// HomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/main.css";
import "../../../styles/header.css";
import "../../../styles/content.css";
import "../../../styles/news.css";
import "../../../styles/slider.css";
import "../../../styles/blog.css";
import "../../../styles/goidulich.css";
import "../../../styles/footer.css";
import image1 from "../../../img/TayBacBaner.png";
import image2 from "../../../img/DaLatbanner.jpg";
import image3 from "../../../img/DaNang.png";
import image4 from "../../../img/MienTayBanner.png";
import Banner from "@/layouts/WebsiteLayout/_components/Banner";
import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";

const HomePage = () => {
    const [tours, setTours] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            try {
                const data = await instance.get("/products");
                // console.log(data.data.data);
                setTours(data.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div id="main">
            <Banner />
            {tours.map((item) => (
                <div key={item._id}>
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        <Link to={`/detail-tour/${item._id}`}>{item.name}</Link>
                    </h1>
                </div>
            ))}
            <div id="content">
                <div>
                    <div className="introduct">
                        <div className="container">
                            <div className="content center">
                                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                                <span className="line gold" />
                                <h2 className="t-content">
                                    HÃY CÙNG NHAU ĐI
                                    <span className="t-gold"> DU LỊCH</span>
                                </h2>
                                <div id="4diemden" />
                                <h5 className="t-black bot-content">
                                    CHỌN CHO MÌNH MỘT ĐIỂM ĐẾN
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="layout-content">
                        <div className="box-container">
                            <div className="box">
                                <img src={image1} alt="img-left" />
                                <div className="content">
                                    <h3>SAPA</h3>
                                    <p>
                                        Sapa là “nơi gặp gỡ giữa trời và đất”
                                        cảnh sắc thiên nhiên hùng vĩ bậc nhất
                                        miền Bắc
                                    </p>
                                    <Link to="/sapa" className="btn">
                                        ĐẾN ĐÓ
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <img src={image2} alt="img-left" />
                                <div className="content">
                                    <h3>ĐÀ LẠT</h3>
                                    <p>
                                        Đà lạt nổi tiếng với các đồi thông và
                                        "lời nguyền chia tay" của các cặp đôi!
                                    </p>
                                    <Link to="/dalat" className="btn">
                                        ĐẾN ĐÓ
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <img src={image3} alt="img-left" />
                                <div className="content">
                                    <h3>VŨNG TÀU</h3>
                                    <p>
                                        Vũng Tàu từ lâu đã nổi tiếng với những
                                        bãi tắm đẹp và vô vàng những món ăn
                                        ngon.
                                    </p>
                                    <Link to="/vungtau" className="btn">
                                        ĐẾN ĐÓ!
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <img src={image4} alt="img-left" />
                                <div className="content">
                                    <h3>CẦN THƠ</h3>
                                    <p>
                                        Cần Thơ được gọi là xứ Tây Đô. Nổi tiếng
                                        với cảnh sắc phong phú và trong lành.
                                    </p>
                                    <Link to="/cantho" className="btn">
                                        ĐẾN ĐÓ!
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

export default HomePage;
