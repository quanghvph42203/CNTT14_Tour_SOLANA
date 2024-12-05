import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/interfaces/Product";
import "../../../styles/tourList.css";
import axios from "axios";

const TourList: React.FC = () => {
  const [tours, setTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Hàm tải dữ liệu từ API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const headers = {
          accept: "application/json",
          "content-type": "application/json",
          "x-api-key":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJkZGQyYWZlMS1mNjQ0LTQ4MmMtYTE1Mi01ZGYxNDcxNDg5YmUiLCJzdWIiOiJlZjZlMjQwMS1iMjJkLTQ3NzQtODZkNy0yNjRiNmZjZGNjM2UiLCJpYXQiOjE3MzMzNTgwOTR9.0U72URFblRgXKu-FR8oAaO04c1_Wsyir95ggvBXpImU",
        };

        const response = await axios.get("https://api.gameshift.dev/nx/items", {
          headers,
        });
        console.log("API Response:", response.data);

        // Định dạng lại dữ liệu
        const data = response.data.data.map((item: any) => ({
          _id: item.item.id,
          name: item.item.name,
          price: item.item.naturalAmount, // Giá giảm giá trị tùy chỉnh theo API
          image: item.item.imageUrl,
        }));

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
    price,
    image,
  }) => {
    const renderStars = () => {
      const maxStars = 5;
      const fixedStars = 4;
      return (
        <div className="stars">
          {Array.from({ length: maxStars }, (_, index) => (
            <span
              key={index}
              style={{ color: index < fixedStars ? "#218838" : "#e4e5e9" }}
            >
              ★
            </span>
          ))}
        </div>
      );
    };

    return (
      <div className="tour-card" key={_id}>
        {image ? (
          <img className="tour-card__image" src={image} alt={name} />
        ) : (
          <p>Không có hình ảnh</p>
        )}

        <p style={{ fontWeight: "bold" }}>{name}</p>
        <p style={{ color: "black", fontWeight: "bold" }}>
          {price}
        </p>
        {renderStars()}

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
