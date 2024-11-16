import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/interfaces/Product";
import "../../../styles/tourList.css"; 
import instance from "@/configs/axios"; 

const TourList: React.FC = () => {
  const [tours, setTours] = useState<IProduct[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string>(""); 

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await instance.get("/products");
        console.log("API Response:", response.data);
  
        
        const data = Array.isArray(response.data.data) ? response.data.data : [];
        console.log("Formatted Data:", data); 
  
        setTours(data); 
      } catch (err: any) {
        console.error("Error fetching tours:", err);
        setError(err.message || "Lỗi khi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };
  
    fetchTours();
  }, []);
  
  

  
  const TourCard: React.FC<IProduct> = ({
    _id,
    name,
    description,
    price,
    discount_price,
    image,
    countInStock,
  }) => {
    const truncateText = (text: string, wordLimit: number) => {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    };
  
    return (
      <div className="tour-card" key={_id}>
        {image ? (
          <img className="tour-card__image" src={image} alt={name} />
        ) : (
          <p>Không có hình ảnh</p>
        )}
        <h3 className="nametour">{name || "Tên không xác định"}</h3>
        <p>{description ? truncateText(description, 20) : "Không có mô tả"}</p>
  
        <div className="price-container">
          <p>
            Giá:{" "}
            <span style={{ textDecoration: discount_price ? "line-through" : "none" }}>
              {price?.toLocaleString() || "0"} VND
            </span>
          </p>
          {discount_price && (
            <p className="gia-khuyen-mai">{discount_price?.toLocaleString()} VND</p>
          )}
        </div>
  
        <p>
          Trạng thái: {countInStock !== 0 ? `Còn ${countInStock} chỗ` : "Hết chỗ"}
        </p>

        <Link className="tour-card__btn" to={`/detail-tour/${_id}`}>
          Đặt ngay
        </Link>
      </div>
    );
  };
  

  
  if (loading) {
    return (
      <div className="center-containers">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="center-containers">
        <p>{error}</p>
      </div>
    );
  }

 
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
        <div className="box-containers">
          {tours.length > 0 ? (
            tours.map((tour) => <TourCard key={tour._id} {...tour} />)
          ) : (
            <p>Không có gói du lịch nào!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourList;
