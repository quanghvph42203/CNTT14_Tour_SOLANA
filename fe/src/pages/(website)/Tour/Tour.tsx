import React from "react";
import { IProduct } from "@/interfaces/Product";

interface TourCardProps {
  tour: IProduct;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", width: "300px" }}>
      {tour.image ? (
        <img src={tour.image} alt={tour.name} style={{ width: "100%" }} />
      ) : (
        <p>Không có hình ảnh</p>
      )}
      <h3>{tour.name}</h3>
      <p>{tour.description || "Không có mô tả"}</p>
      <p>Giá: {tour.discount_price.toLocaleString()} VND</p>
      {tour.discount && <p>Giảm giá: {tour.discount}%</p>}
      <p>Trạng thái: {tour.status === "available" ? "Còn hàng" : "Hết hàng"}</p>
    </div>
  );
};

export default TourCard;
