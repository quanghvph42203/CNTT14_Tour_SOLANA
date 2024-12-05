import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { Spin, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailTour = () => {
  const { id } = useParams<{ id: string }>(); // Lấy `id` từ URL
  console.log(id);

  const [tour, setTuor] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const loadProductDetail = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJkZGQyYWZlMS1mNjQ0LTQ4MmMtYTE1Mi01ZGYxNDcxNDg5YmUiLCJzdWIiOiJlZjZlMjQwMS1iMjJkLTQ3NzQtODZkNy0yNjRiNmZjZGNjM2UiLCJpYXQiOjE3MzMzNTgwOTR9.0U72URFblRgXKu-FR8oAaO04c1_Wsyir95ggvBXpImU",
      };

      const response = await axios.get(
        `https://api.gameshift.dev/nx/items/${id}`,
        { headers }
      );
      console.log(response.data);

      const productDetail = {
        name: response.data.item.name,
        price: response.data.item.price.naturalAmount,
        image: response.data.item.imageUrl,
        description: response.data.item.description,
        id: response.data.item.id,
        attributes: response.data.item.attributes.map(
          (attr: any) => attr.value
        ),
      };

      setTuor(productDetail);
      setLoading(false);
    } catch (error) {
      console.log("Tải chi tiết sản phẩm thất bại");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) loadProductDetail(id); // Chỉ gọi API khi `id` tồn tại
  }, [id]);
  const handleNextImage = () => {
    if (tour?.attributes) {
      const totalImages = tour.attributes.length + 1; // `attributes` + ảnh chính
      const newIndex = (currentIndex + 1) % totalImages;

      setCurrentIndex(newIndex);
      setSelectedImage(
        newIndex === 0
          ? tour.image || "" // Ảnh chính
          : tour.attributes[newIndex - 1] || "" // Ảnh từ attributes
      );
    }
  };

  const handlePrevImage = () => {
    if (tour?.attributes) {
      const totalImages = tour.attributes.length + 1;
      const newIndex = (currentIndex - 1 + totalImages) % totalImages;

      setCurrentIndex(newIndex);
      setSelectedImage(
        newIndex === 0
          ? tour.image || "" // Ảnh chính
          : tour.attributes[newIndex - 1] || "" // Ảnh từ attributes
      );
    }
  };
  const handleBuy = async (itemId: any) => {
    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${itemId}/buy`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJkZGQyYWZlMS1mNjQ0LTQ4MmMtYTE1Mi01ZGYxNDcxNDg5YmUiLCJzdWIiOiJlZjZlMjQwMS1iMjJkLTQ3NzQtODZkNy0yNjRiNmZjZGNjM2UiLCJpYXQiOjE3MzMzNTgwOTR9.0U72URFblRgXKu-FR8oAaO04c1_Wsyir95ggvBXpImU",
      };
      const body = {
        buyerId: "havietquangk4",
      };

      const response = await axios.post(url, body, { headers });

      // Kiểm tra xem `consentUrl` có được trả về trong phản hồi không
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
  if (loading)
    return (
      <Spin
        size="large"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "20px",
        }}
      />
    );

  if (!tour) return <div>Không tìm thấy sản phẩm!</div>;

  return (
    <>
      <div
        className="travel_tour mt-[80px]"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        <p className="text-[13px] text-[#00759A] ml-[60px]">
          <span>
            <Link to="/">Trang chủ / </Link>
          </span>
          <span>{tour?.name}</span>
        </p>
        <h1 className="text-5xl capitalize ml-[60px] mt-8 text-[#214f69] font-bold">
          {tour?.name}
        </h1>
        <div className="grid grid-cols-2">
          <div className="image_tour ml-[60px]">
            <div className="image_primary w-[650px] mt-8 ml-10 relative ">
              <img
                src={selectedImage || tour?.image || ""}
                alt=""
                className="w-full object-cover"
              />
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePrevImage}
                  className="h-12 w-12 rounded-full border border-[#b5b5b7] bg-[#f9f9f9] absolute top-[46%] left-3"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextImage}
                  className="h-12 w-12 rounded-full border border-[#b5b5b7] bg-[#f9f9f9] absolute top-[46%] right-3"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="image_gallery flex ml-[110px] mt-3">
              <img src={` ${tour?.attributes}`} alt="" />
            </div>
          </div>
          <div className="info_tour mt-14">
            <p className="text-[15px] ml-10">Giá tour trọn gói</p>
            <p className="font-bold text-4xl ml-12 text-[#fd3131] mb-[30px]">
              $ {tour?.price} USD
            </p>
            <div className="box_star -mt-[20px] ml-10 mb-[15px]">
              <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
              <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
              <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
              <i className="fa-regular fa-star text-yellow-400 text-2xl"></i>
              <i className="fa-regular fa-star text-yellow-400 text-2xl"></i>
            </div>
            {/* hr */}
            <div className="w-[350px] h-[0.75px] bg-[#d6d6d8] ml-10 -mt-2"></div>
            {/* *end hr */}
            <div className="info_location ml-10 mt-3 text-xl">
              <p>
                <i className="fa-solid fa-clock me-2"></i>Lịch trình: 4 ngày 3
                đêm
              </p>
              <p>
                <i className="fa-solid fa-road me-2"></i>Khởi hành: Theo yêu cầu
              </p>
            </div>
            {/* hr */}
            <div className="w-[350px] h-[0.75px] bg-[#d6d6d8] ml-10 mt-2"></div>
            {/* *end hr */}
            <div className="Action mt-10 ml-10">
              <button
                className="w-[350px] h-[60px] bg-[#ff5c01] text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232]"
                onClick={() => handleBuy(tour.id)}
              >
                <i className="fa-solid fa-plane-departure text-5xl"></i>
                <span className="text-2xl ms-2">Đặt Ngay</span>
                <i className="fa-solid fa-chevron-right text-xl ms-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <p className="relative text-4xl ml-[70px] font-bold mt-16  before:contents-[''] before:absolute before:w-[4px] before:h-14 before:bg-[#214f69] before:-left-3 before:-top-2">
        Giới Thiệu
      </p>
      <p
        className="text-2xl ml-[80px] w-[1400px] "
        style={{ lineHeight: "28px" }}
      >
        {tour?.description}
      </p>
      <img
        src={`${tour?.image}`}
        alt=""
        style={{
          width: "700px",
          height: "500px",
          objectFit: "cover",
          marginLeft: "400px",
        }}
      />
    </>
  );
};

export default DetailTour;
