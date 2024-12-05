import { IProduct } from "@/common/types/product";
import { Spin, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "./component/Section";
import Detail from "./component/detail";
import { loadProductDetail, loadRelatedTours } from "./service/TourService";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

const DetailTour = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<IProduct | null>(null);
  const [relatedTours, setRelatedTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (id) {
      setLoading(true);

      loadProductDetail(id).then((productDetail) => {
        if (productDetail) {
          setTour(productDetail);
          setSelectedImage(productDetail.image);
        }
      });

      loadRelatedTours()
        .then((productList) => {
          setRelatedTours(productList);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

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

  if (loading) {
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
  }

  if (!tour) {
    return <div>Không tìm thấy sản phẩm!</div>;
  }

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(tour.attributes[currentIndex - 1].value);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < tour.attributes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(tour.attributes[currentIndex + 1].value);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(tour.attributes[index].value);
  };

  return (
    <>
      <div
        className="travel_tour mt-[80px] w-[90%] mx-auto"
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

        {/* thông tin tour */}
        <div>
          <Detail
            tour={tour}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            handlePrevImage={handlePrevImage}
            handleNextImage={handleNextImage}
            handleBuy={handleBuy}
          />
        </div>

        {/* Giới Thiệu section */}
        <div className="mt-8 w-[100%] ml-24 mx-auto">
          <h2 className="text-2xl font-bold text-[#214f69] mb-4">Giới Thiệu</h2>
          <Section
            tour={tour}
            attributes={tour?.attributes}
            relatedTours={relatedTours}
            handleThumbnailClick={handleThumbnailClick}
            handleBuy={handleBuy}
          />
        </div>
      </div>
    </>
  );
};

export default DetailTour;
