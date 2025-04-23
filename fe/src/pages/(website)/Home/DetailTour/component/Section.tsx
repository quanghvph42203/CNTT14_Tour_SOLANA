import { Link } from "react-router-dom";

const ramdom = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Section = ({
  tour,
  attributes,
  relatedTours,
  handleThumbnailClick,
  handleBuy,
}) => {
  const randomRelatedTours = ramdom(relatedTours).slice(0, 5);
  console.log(relatedTours);

  return (
    <div>
      {/* Giới thiệu */}
      <div className="grid grid-cols-3 gap-4">
        <div className="image_gallery flex col-span-2 mt-3 justify-center w-full flex-wrap">
          {tour.attributes.map((attr, index) => {
            if (attr.traitType === "image") {
              return (
                <div key={index} className="mt-2">
                  <img
                    src={attr.value}
                    alt={`Image ${index}`}
                    className="w-full object-cover cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                  />
                </div>
              );
            }
            if (attr.traitType === "content") {
              return (
                <div key={index} className="p-10 w-full">
                  <p className="text-[16px]">{attr.value}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        {/* Tour liên quan */}
        <div className="related_tours ml-10 w-[60%] col-span-1">
          <h3 className="text-xl font-bold text-[#214f69] mb-4">
            Tour liên quan
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {randomRelatedTours.map((relatedTour) => (
              <div
                key={relatedTour.id}
                className="related_tour_card p-4 border rounded-md shadow-md"
              >
                <Link
                  to={`/detail-tour/${relatedTour.id}`}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  <img
                    src={relatedTour.image}
                    alt={relatedTour.name}
                    className="w-full h-[200px] object-cover mb-2"
                  />
                  <h4 className="font-bold text-lg">{relatedTour.name}</h4>
                  <p className="text-sm text-[#777]">
                    {relatedTour.price !== undefined ? (
                      <p className="font-bold text-[15px] text-[#fd3131] mb-[30px]">
                        $ {relatedTour.price} USD
                      </p>
                    ) : (
                      <p className="font-bold text-[10px] text-red-500 mb-[30px]">
                        Sản phẩm chưa được bày bán
                      </p>
                    )}
                  </p>
                </Link>
                <button
                  className={`${
                    relatedTour.price === undefined
                      ? "bg-gray-500"
                      : "bg-[#ff5c01]"
                  } text-white rounded-xl p-4 ms-1 hover:bg-[#ff3232]`}
                  onClick={() => {
                    if (relatedTour.price !== undefined)
                      handleBuy(relatedTour.id);
                  }}
                  disabled={relatedTour.price === undefined}
                >
                  <span className="text-2xl">
                    {relatedTour.price === undefined
                      ? "Sản phẩm chưa được bán"
                      : "Đặt Ngay"}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-right text-xl ms-4 ${
                      relatedTour.price === undefined ? "hidden" : ""
                    }`}
                  ></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
