import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { Spin, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
  const [tours, setTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
      };

      const response = await axios.get("https://api.gameshift.dev/nx/items", {
        headers,
      });

      const productList = response.data.data
        .map((product) => ({
          name: product.item.name,
          image: product.item.imageUrl,
          description: product.item.description,
          id: product.item.id,
        }))
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

  const handleBuy = async (itemId) => {
    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${itemId}/buy`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
      };
      const body = {
        buyerId: "người dùng 1111",
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

  return (
    <div className="bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        <h1 className="text-7xl text-center mb-10 text-gray-800">
          TOUR NỔI BẬT
        </h1>

        {tours.length >= 5 ? (
          <Slider {...settings}>
            {tours.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden mx-3 hover:shadow-xl transition-shadow duration-300">
                  <Link
                    to={`/detail-tour/${item.id}`}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    <div className="h-[250px] bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-4 h-[100px]">
                    <Link
                      to={`/detail-tour/${item.id}`}
                      className="hover:text-blue-500 transition-colors duration-200"
                    >
                      <h2 className="text-[22px] font-semibold text-gray-800">
                        {item.name}
                      </h2>
                    </Link>
                    <div className="flex items-center justify-between mt-4">
                      <button
                        className="bg-blue-500 p-4 text-white font-bold border-collapse text-[15px]"
                        onClick={() => handleBuy(item.id)}
                      >
                        Mua sản phẩm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className="bg-blue-500 p-4 text-white font-bold border-collapse text-[15px]"
                      onClick={() => handleBuy(item.id)}
                    >
                      Mua sản phẩm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
