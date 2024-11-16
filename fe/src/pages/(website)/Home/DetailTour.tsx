import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailTour = () => {
    const { id } = useParams();
    const [tour, setTour] = useState<IProduct | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const formatPrice = (price: number): string => {
        return price.toLocaleString("vi-VN") + "đ";
    };
    const formatdiscount_price = (discount_price: number): string => {
        return discount_price.toLocaleString("vi-VN") + "đ";
    };
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                console.log(data);

                setTour(data);
                setSelectedImage(data.image || "");
                setCurrentIndex(-1);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    const handleNextImage = () => {
        if (tour?.gallery) {
            const newIndex = (currentIndex + 1) % (tour.gallery.length + 1);
            setCurrentIndex(newIndex);
            setSelectedImage(
                newIndex === -1
                    ? tour.image || ""
                    : tour.gallery[newIndex] || ""
            );
        }
    };

    const handlePrevImage = () => {
        if (tour?.gallery) {
            const newIndex =
                (currentIndex - 1 + (tour.gallery.length + 1)) %
                (tour.gallery.length + 1);
            setCurrentIndex(newIndex);
            setSelectedImage(
                newIndex === -1
                    ? tour.image || ""
                    : tour.gallery[newIndex] || ""
            );
        }
    };

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
                        <div className="image_primary w-[650px] mt-8 ml-10 relative">
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
                            {tour?.gallery?.map((imgUrl, index) => (
                                <img
                                    key={index}
                                    src={imgUrl}
                                    alt={`Gallery image ${index + 1}`}
                                    className={`w-[150px] mr-3 cursor-pointer ${currentIndex === index ? "border-2 border-blue-500" : ""}`}
                                    onClick={() => {
                                        setSelectedImage(imgUrl);
                                        setCurrentIndex(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="info_tour mt-14">
                        <p className="text-[15px] ml-10">Giá tour trọn gói</p>
                        <p className="font-bold text-5xl ml-10 text-[#eb5937]">
                            {tour
                                ? formatdiscount_price(tour.discount_price)
                                : "Giá không có sẵn"}
                        </p>
                        <p className="font-bold text-4xl ml-12 text-[#7d7c7c] -mt-8 line-through">
                            {tour
                                ? formatPrice(tour.price)
                                : "Giá không có sẵn"}
                        </p>
                        <div className="box_star -mt-[20px] ml-10">
                            <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                            <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                            <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                            <i className="fa-regular fa-star text-yellow-400 text-2xl"></i>
                            <i className="fa-regular fa-star text-yellow-400 text-2xl"></i>
                        </div>
                        <p className="text-[13px] ml-10 mt-5 text-[#eb5937]">
                            {tour?.countInStock !== undefined &&
                            tour.countInStock > 0 ? (
                                <>Số tour sẵn có: {tour.countInStock}</>
                            ) : (
                                <>Hiện tại không còn tour</>
                            )}
                        </p>
                        {/* hr */}
                        <div className="w-[350px] h-[0.75px] bg-[#d6d6d8] ml-10 -mt-2"></div>
                        {/* *end hr */}
                        <div className="info_location ml-10 mt-3 text-xl">
                            <p>
                                <i className="fa-solid fa-map-location-dot me-2"></i>
                                Điểm đến: {tour?.location}
                            </p>
                            <p>
                                <i className="fa-solid fa-clock me-2"></i>Lịch
                                trình: 4 ngày 3 đêm
                            </p>
                            <p>
                                <i className="fa-solid fa-road me-2"></i>Khởi
                                hành: Theo yêu cầu
                            </p>
                        </div>
                        {/* hr */}
                        <div className="w-[350px] h-[0.75px] bg-[#d6d6d8] ml-10 mt-2"></div>
                        {/* *end hr */}
                        <div className="Action mt-10 ml-10">
                            {tour?.countInStock !== undefined &&
                            tour.countInStock > 0 ? (
                                <>
                                    <Link to={`/payTour/${tour._id}`}>
                                        <button className="w-[350px] h-[60px] bg-[#ff5c01] text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232]">
                                            <i className="fa-solid fa-plane-departure text-5xl"></i>
                                            <span className="text-2xl ms-2">
                                                Đặt Ngay
                                            </span>
                                            <i className="fa-solid fa-chevron-right text-xl ms-4"></i>
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="w-[350px] h-[60px] bg-[#ff5c01] text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232] disabled:bg-gray-300 disabled:cursor-not-allowed"
                                        disabled
                                    >
                                        <i className="fa-solid fa-plane-departure text-5xl"></i>
                                        <span className="text-2xl ms-2">
                                            Đặt Ngay
                                        </span>
                                        <i className="fa-solid fa-chevron-right text-xl ms-4"></i>
                                    </button>
                                </>
                            )}
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
