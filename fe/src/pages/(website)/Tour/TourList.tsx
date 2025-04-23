import { IProduct } from "@/interfaces/Product";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/tourList.css";
import { loadRelatedTours } from "../Home/DetailTour/service/TourService";

const TourList: React.FC = () => {
  const [tours, setTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Hàm tải dữ liệu từ API
  useEffect(() => {
    loadRelatedTours()
      .then((productList) => {
        setTours(productList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleBuy = async (itemId) => {
    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${itemId}/buy`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": API_KEY,
      };
      const body = {
        buyerId: "người dùng 1111",
      };

      const response = await axios.post(url, body, { headers });

      if (response.data.consentUrl) {
        window.location.href = response.data.consentUrl;
      } else {
        message.error("Lỗi khi mua sản phẩm. Vui lòng thử lại.");
      }
    } catch (error) {
      message.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
      console.error(error);
    }
  };

  const TourCard: React.FC<IProduct> = ({ _id, name, price, image }) => {
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
        <p style={{ color: "black", fontWeight: "bold" }}>{price}</p>
        {renderStars()}

        <button
          className={`${
            price === undefined ? "bg-gray-500" : "bg-[#ff5c01]"
          } text-white rounded-xl p-4 ms-1 hover:bg-[#ff3232]`}
          onClick={() => {
            if (price !== undefined) handleBuy(id);
          }}
          disabled={price === undefined}
        >
          <span className="text-2xl">
            {price === undefined ? "Sản phẩm chưa được bán" : "Đặt Ngay"}
          </span>
          <i
            className={`fa-solid fa-chevron-right text-xl ms-4 ${
              price === undefined ? "hidden" : ""
            }`}
          ></i>
        </button>
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
