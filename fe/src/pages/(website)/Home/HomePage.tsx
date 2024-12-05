import { IProduct } from "@/common/types/product";
import { Spin, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

const Home = () => {
  const [tours, setTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": API_KEY,
      };

      const response = await axios.get("https://api.gameshift.dev/nx/items", {
        headers,
      });

      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);

      const productList = response.data.data
        .map((product) => ({
          name: product.item.name,
          image: product.item.imageUrl,
          description: product.item.description,
          id: product.item.id,
          price: product.item.price?.naturalAmount,
          created: product.item.created,
        }))
        .filter((product) => {
          const productDate = new Date(product.created);
          productDate.setUTCHours(0, 0, 0, 0);
          return productDate >= today;
        })
        .sort((a, b) => new Date(b.created) - new Date(a.created));

      setTours(productList);
      setLoading(false);
    } catch (error) {
      message.error("Tải danh sách sản phẩm thất bại");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleBuy = async (itemId: string) => {
    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${itemId}/buy`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",

        "x-api-key": API_KEY,
      };
      const body = {
        buyerId: "havietquangk4",
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

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading)
    return (
      <Spin
        size="large"
        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
      />
    );

  // Get the products that are not displayed in the slider
  const displayedProducts = tours.slice(0, 4);
  const remainingProducts = tours.slice(4);

  return (
    <div className="bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-[30px] mt-16 bg-blue-400 p-6 text-white font-bold">
          TOUR NỔI BẬT
        </h1>

        {tours.length >= 5 ? (
          <>
            <Slider {...settings}>
              {displayedProducts.map((item, index) => (
                <div className="flex gap-2" key={index}>
                  <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden mx-3 hover:shadow-xl transition-shadow duration-300">
                    <div className="h-[300px] bg-gray-100">
                      <Link
                        to={`/detail-tour/${item.id}`}
                        className="hover:text-blue-500 transition-colors duration-200"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div className="p-4 h-[150px]">
                      <h2 className="text-[22px] font-semibold text-gray-800">
                        <Link
                          to={`/detail-tour/${item.id}`}
                          className="hover:text-blue-500 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-[15px]">
                        {item.price
                          ? `${item.price} USDC`
                          : "Sản phẩm chưa được bày bán"}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <button
                          className={`w-[350px] h-[60px] ${
                            item.price === undefined
                              ? "bg-gray-500"
                              : "bg-[#ff5c01]"
                          } text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232]`}
                          onClick={() => {
                            if (item.price !== undefined) handleBuy(item.id);
                          }}
                          disabled={item.price === undefined} // Disable if price is undefined
                        >
                          <span className="text-2xl ms-2">
                            {item.price === undefined
                              ? "Sản phẩm chưa được bày bán"
                              : "Đặt Ngay"}
                          </span>
                          <i
                            className={`fa-solid fa-chevron-right text-xl ms-4 ${
                              item.price === undefined ? "hidden" : ""
                            }`}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <div className="flex flex-wrap">
            {tours.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 w-[23%] mx-auto rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-[250px] bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-[22px] font-semibold text-gray-800">
                    <Link
                      to={`/detail-tour/${item.id}`}
                      className="hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </h2>
                  <p className="text-gray-600">
                    {item.price
                      ? `${item.price} USDC`
                      : "Sản phẩm chưa được bày bán"}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className={`w-[350px] h-[60px] ${
                        item.price === undefined
                          ? "bg-gray-500"
                          : "bg-[#ff5c01]"
                      } text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232]`}
                      onClick={() => {
                        if (item.price !== undefined) handleBuy(item.id);
                      }}
                      disabled={item.price === undefined} // Disable if price is undefined
                    >
                      <i className="fa-solid fa-plane-departure text-5xl"></i>
                      <span className="text-[15px] ms-2">
                        {item.price === undefined
                          ? "Sản phẩm chưa được bày bán"
                          : "Đặt Ngay"}
                      </span>
                      <i
                        className={`fa-solid fa-chevron-right text-xl ms-4 ${
                          item.price === undefined ? "hidden" : ""
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-center text-[30px] mt-16 bg-blue-400 p-6 text-white font-bold">
          TẤT CẢ CÁC GÓI TOUR
        </h2>
        {/* Hiển thị các sản phẩm còn lại */}
        <div className="flex flex-wrap gap-6 mt-10">
          {remainingProducts.map((item) => (
            <div key={item.id} className="w-[23%]">
              <div className="bg-white h-[470px] p-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="h-[300px] bg-gray-100">
                  <Link
                    to={`/detail-tour/${item.id}`}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-[22px] font-semibold text-gray-800">
                    <Link
                      to={`/detail-tour/${item.id}`}
                      className="hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-[15px] flex-grow">
                    {item.price
                      ? `${item.price} USDC`
                      : "Sản phẩm chưa được bày bán"}
                  </p>
                  <div className="mt-auto">
                    <button
                      className={`w-full h-[60px] ${
                        item.price === undefined
                          ? "bg-gray-500"
                          : "bg-[#ff5c01]"
                      } text-white rounded-xl hover:bg-[#ff3232]`}
                      onClick={() => {
                        if (item.price !== undefined) handleBuy(item.id);
                      }}
                      disabled={item.price === undefined}
                    >
                      <span className="text-2xl ms-2">
                        {item.price === undefined
                          ? "Sản phẩm chưa được bày bán"
                          : "Đặt Ngay"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
