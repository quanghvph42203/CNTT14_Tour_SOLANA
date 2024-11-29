import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
  const [tours, setTours] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await instance.get("/products");
        const outstandingTours = data.data.data.filter(
          (item: IProduct) => item.status === "outstanding"
        );
        setTours(outstandingTours);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const settings = {
    infinite: true, // Không lặp lại ảnh
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true, // Không tự động chuyển slide
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

  return (
    <div className="bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        <h1 className="text-7xl text-center mb-10 text-gray-800">
          TOUR NỔI BẬT
        </h1>

        {tours.length >= 5 ? (
          <Slider {...settings}>
            {tours.map((item) => (
              <div className="flex gap-2" key={item._id}>
                <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden mx-3 hover:shadow-xl transition-shadow duration-300">
                  <div className="h-[250px] bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 h-[100px] ">
                    <h2 className="text-[22px] font-semibold text-gray-800">
                      <Link
                        to={`/detail-tour/${item._id}`}
                        className="hover:text-blue-500 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-blue-600">
                        {item.price.toLocaleString("vi-VN")} ₫
                      </span>
                      <Link
                        to={`/detail-tour/${item._id}`}
                        className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                      >
                        Xem chi tiết
                      </Link>
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
                key={item._id}
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
                      to={`/detail-tour/${item._id}`}
                      className="hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-blue-600">
                      {item.price.toLocaleString("vi-VN")} ₫
                    </span>
                    <Link
                      to={`/detail-tour/${item._id}`}
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Xem chi tiết
                    </Link>
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
