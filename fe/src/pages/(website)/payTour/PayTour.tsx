import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const PayTour = () => {
    const { id } = useParams();
    const [hidden, setHidden] = useState(false);
    console.log(hidden);

    const [tour, setTour] = useState<IProduct | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                console.log(data);
                setTour(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);
    const user = JSON.parse(localStorage.getItem("user") as string);
    // console.log(user);
    const formatPrice = (price: number): string => {
        return price.toLocaleString("vi-VN") + "đ";
    };
    return (
        <>
            <div className="mt-[65px] w-full">
                <div className="relative">
                    <img
                        src="../../../../public/img/paytour.jpg"
                        alt=""
                        className="-ml-1 w-full"
                    />
                    <div className="absolute top-[47%] left-[18.5%] translate-y-[-50%] text-white">
                        <h1 className="font-bold text-5xl capitalize">
                            Du lịch cùng <b className="">GoodTrip.vn</b>
                        </h1>
                        <p className="w-[450px] text-[15px] leading-[25px]">
                            Vinh hạnh của chúng tôi là mang đến cho bạn những
                            chuyến đi đáng nhớ. Mang đến cho bạn những chuyến đi
                            đầy cảm hứng. Khám phá những vùng đất mới. Tự do
                            khám phá cùng chúng tôi.
                        </p>
                        <Link
                            to="/"
                            className="w-[200px] h-[40px] text-xl rounded-2xl bg-[#089cfe] absolute top-[106%] -ml-[7px] flex items-center justify-center"
                        >
                            Tìm Hiểu Ngay
                        </Link>
                    </div>
                    <div className="address w-[80%] h-[90px] absolute left-[10%] -bottom-[45px] bg-white border-[3px] border-[#089cfe] rounded-3xl ">
                        <div className="w-full h-full flex items-center  mt-1">
                            <div className="flex items-center ml-10">
                                <i className="fa-solid fa-location-dot me-3 text-3xl text-blue-600 h-[40px] w-[40px] bg-blue-200 flex items-center justify-center rounded-full"></i>
                                <p
                                    className="w-[280px] border-[3px] border-[#f3f4f6] mt-6 rounded-2xl py-[12px] pl-[10px] text-2xl font-bold 
               bg-gray-100 "
                                >
                                    {tour?.location}
                                </p>
                            </div>
                            {/* Ngày bắt đầu */}
                            <div className="flex items-center ml-10">
                                <i className="fa-regular fa-calendar-days me-3 text-3xl text-blue-600 h-[40px] w-[40px] bg-blue-200 flex items-center justify-center rounded-full"></i>
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    title="Chọn ngày bắt đầu"
                                    className="w-[280px] border-[3px] border-[#f3f4f6] rounded-2xl py-[12px] pl-[10px] text-2xl font-bold 
               bg-gray-100 shadow-md transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1
               focus:outline-none focus:ring-4 focus:ring-blue-200 focus:bg-white"
                                />
                            </div>
                            {/* --end ngày bắt đầu-- */}
                            {/* Ngày kết thúc */}
                            <div className="flex items-center ml-10">
                                <i className="fa-regular fa-calendar-days me-3 text-3xl text-blue-600 h-[40px] w-[40px] bg-blue-200 flex items-center justify-center rounded-full"></i>
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    title="Chọn ngày kết thúc"
                                    className="w-[280px] border-[3px] border-[#f3f4f6] rounded-2xl py-[12px] pl-[10px] text-2xl font-bold 
               bg-gray-100 shadow-md transition-all duration-300 ease-in-out
               hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1
               focus:outline-none focus:ring-4 focus:ring-blue-200 focus:bg-white"
                                />
                            </div>
                            {/* --end ngày kết thúc-- */}
                        </div>
                    </div>
                </div>
            </div>
            {/* info user */}
            <div className="w-[1440px] mx-auto  mt-[60px]">
                <div className="flex items-center">
                    {/* info user */}
                    <div className="w-[70%] bg-red-00 pt-[20px] pl-[150px]">
                        <p className="text-4xl font-bold uppercase">
                            Thông Tin Liên Lạc
                        </p>
                        {user ? (
                            <></>
                        ) : (
                            <>
                                <div className="flex items-center text-xl h-[50px] w-[500px] bg-[#daefff] pl-3 rounded-xl -mt-4 mb-9">
                                    <i className="fa-solid fa-circle-user me-2"></i>
                                    <Link
                                        to="/login"
                                        className="font-semibold text-[#0509c0] underline"
                                    >
                                        Đăng Nhập
                                    </Link>
                                    <p className="mt-[12px] ms-1">
                                        để nhận ưu đãi, tích điểm và quản lý đơn
                                        hàng dễ dàng hơn!
                                    </p>
                                </div>
                            </>
                        )}
                        <form action="w-full pl-3">
                            <div className="flex">
                                <div className="mb-3 w-[35%] me-5">
                                    <label
                                        htmlFor="name"
                                        className="block text-2xl font-bold text-gray-700 mb-1 ml-4"
                                    >
                                        Họ và Tên{" "}
                                        <b className="text-red-600 text-2xl">
                                            *
                                        </b>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nhập họ và tên"
                                        className="w-full border h-[30px] text-lg border-none border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div className="mb-3 w-[35%]">
                                    <label
                                        htmlFor="phone"
                                        className="block text-2xl font-bold text-gray-700 mb-1 ml-4"
                                    >
                                        Số Diện Thoại
                                        <b className="text-red-600 text-2xl">
                                            *
                                        </b>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="name"
                                        placeholder="Nhập họ và tên"
                                        className="w-full border h-[30px] text-lg border-none border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <div className="mb-3 w-[35%] me-5">
                                    <label
                                        htmlFor="email"
                                        className="block text-2xl font-bold text-gray-700 mb-1 ml-4"
                                    >
                                        Email
                                        <b className="text-red-600 text-2xl">
                                            *
                                        </b>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="name"
                                        placeholder="Nhập họ và tên"
                                        className="w-full border h-[30px] text-lg border-none border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                                <div className="mb-3 w-[35%]">
                                    <label
                                        htmlFor="address"
                                        className="block text-2xl font-bold text-gray-700 mb-1 ml-4"
                                    >
                                        Địa Chỉ
                                        <b className="text-red-600 text-2xl">
                                            *
                                        </b>
                                    </label>
                                    <input
                                        type="address"
                                        id="phone"
                                        name="name"
                                        placeholder="Nhập họ và tên"
                                        className="w-full border h-[30px] text-lg border-none border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="note"
                                    className="block text-2xl font-bold text-gray-700 mb-1 ml-4"
                                >
                                    Ghi Chú
                                </label>
                                <textarea
                                    id="note"
                                    className="w-[550px] border ml-4 mt-2 h-[100px] text-lg border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                ></textarea>
                            </div>
                            <div className="">
                                <p className="font-bold text-4xl mt-10 mb-10">
                                    Các Hình Thức Thanh Toán
                                </p>
                                {/* tiền Mặt  */}
                                <div className="flex items-center justify-between  p-4 border rounded-lg bg-gray-50 w-[67%]">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold">
                                            Tiền mặt
                                        </span>
                                        <span className="text-xl">💵</span>
                                    </div>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="COD"
                                        className="w-5 h-5 border-gray-400 rounded"
                                        onClick={() => setHidden(false)}
                                    ></input>
                                </div>
                                {/* chuyển khoản */}
                                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 w-[67%] mt-5">
                                    <div
                                        className={`flex flex-col ${hidden ? "h-[150px]" : "h-[25px] overflow-y-hidden"} `}
                                    >
                                        <div className="flex items-center space-x-2 mb-[10px]">
                                            <span className="font-semibold">
                                                Chuyển khoản MOMO
                                            </span>
                                            <img
                                                src="data:image/png;base64,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"
                                                alt=""
                                                className="w-[30px]"
                                            />
                                        </div>
                                        <div className="w-[100%]">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Dolores consequatur autem culpa quis
                                            voluptas qui, explicabo voluptatum
                                            odio. Magnam veniam fugit excepturi
                                            illum temporibus aut a, nesciunt
                                            veritatis ullam quos beatae
                                            asperiores pariatur cupiditate ea
                                            culpa sed! Vero non sint veniam
                                            fugiat eum? Nihil nostrum ad facere
                                            aliquid aperiam voluptas asperiores,
                                            omnis neque excepturi expedita
                                            obcaecati praesentium quos maiores
                                            perspiciatis totam aspernatur.
                                            Maxime, perspiciatis? Repellat quam
                                            quidem quisquam fugiat perferendis
                                            aliquid similique ipsa odio est
                                            minus non odit maiores sed, debitis
                                            unde explicabo cupiditate iusto,
                                            voluptatem mollitia? Qui veniam
                                            mollitia atque minus nesciunt
                                            eligendi corrupti quidem maiores
                                            molestias, eveniet dolorum!
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="momo"
                                        className={`w-7 h-7 ${hidden ? "-mt-[130px] " : ""} border-gray-400 rounded`}
                                        onClick={() => setHidden(!hidden)}
                                    ></input>
                                </div>
                            </div>
                            <div className="mt-4">
                                {user ? (
                                    <>
                                        <button className="w-[150px] h-[35px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Thanh toán
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            disabled
                                            className="w-[150px] h-[35px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                                        >
                                            Thanh toán
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                    {/* info tour */}
                    <div className="w-[30%] -ml-[200px] h-[270px] -mt-[200px] ">
                        <div className="bg-[#f8f8f8] h-full pt-8 pl-5 ">
                            <p className="text-4xl font-bold uppercase">
                                Thông Tin Chuyến Đi
                            </p>
                            <div className="flex relative">
                                <img
                                    src={`${tour?.image}`}
                                    className="w-[200px] rounded-xl"
                                    alt=""
                                />
                                <p className="font-bold text-3xl capitalize ms-2 pt-3">
                                    {tour?.name}
                                </p>
                                <p className=" flex absolute bottom-0 right-10 uppercase">
                                    <b className="capitalize me-2">Mã tuor: </b>
                                    {tour?._id}
                                </p>
                            </div>
                            <div className="flex justify-between mt-10 text-4xl font-bold mr-2">
                                <p>Tổng tiền : </p>
                                <p className="text-red-500">
                                    {tour
                                        ? formatPrice(tour.price)
                                        : "Giá không có sẵn"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayTour;
