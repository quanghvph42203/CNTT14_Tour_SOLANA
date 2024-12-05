const Detail = ({
  tour,
  selectedImage,
  setSelectedImage,
  handlePrevImage,
  handleNextImage,
  handleBuy,
}) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="image_tour ml-[60px] ">
        <div className="image_primary w-[600px] mt-8  relative">
          <img
            src={selectedImage || tour?.image || ""}
            alt={tour.name}
            className="w-[700px] h-[400px] object-cover"
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
      </div>
      <div className="info_tour mt-14">
        <p className="text-[15px] ml-10">Giá tour trọn gói</p>
        <p className="font-bold text-4xl ml-10 text-[#fd3131] mb-[30px]">
          {tour.price !== undefined ? (
            <p className="font-bold text-4xl  text-[#fd3131] mb-[30px]">
              $ {tour.price} USD
            </p>
          ) : (
            <p className="font-bold text-4xl text-red-500 mb-[30px]">
              Sản phẩm chưa được bày bán
            </p>
          )}
        </p>
        <div className="box_star -mt-[20px] ml-10 mb-[15px]">
          <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
          <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
          <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
          <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
          <i className="fa-regular fa-star text-yellow-400 text-2xl"></i>
        </div>
        <div className="w-[350px] h-[0.75px] bg-[#d6d6d8] ml-10 -mt-2"></div>
        <div className="info_location ml-10 mt-3 text-xl">
          <p>
            <i className="fa-solid fa-clock me-2"></i>Lịch trình: 4 ngày 3 đêm
          </p>
          <p>
            <i className="fa-solid fa-road me-2"></i>Khởi hành: Theo yêu cầu
          </p>
        </div>
        <button
          className={`w-[350px] h-[60px] ${
            tour.price === undefined ? "bg-gray-500" : "bg-[#ff5c01]"
          } text-white rounded-xl pb-[8px] ms-1 hover:bg-[#ff3232]`}
          onClick={() => {
            if (tour.price !== undefined) handleBuy(tour.id);
          }}
          disabled={tour.price === undefined} // Disable if price is undefined
        >
          <i className="fa-solid fa-plane-departure text-5xl"></i>
          <span className="text-2xl ms-2">
            {tour.price === undefined
              ? "Sản phẩm chưa được bày bán"
              : "Đặt Ngay"}
          </span>
          <i
            className={`fa-solid fa-chevron-right text-xl ms-4 ${
              tour.price === undefined ? "hidden" : ""
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Detail;
