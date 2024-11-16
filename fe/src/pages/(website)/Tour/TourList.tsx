import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '@/common/types/product';
import axios from 'axios';
import TourCard from './Tour';

const TourList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        let data = response.data;
        if (!Array.isArray(data)) {
          if (data && data.products) {
            data = data.products;
          } else {
            data = [];
          }
        }
        setProducts(data);
      } catch (err: any) {
        setError(err?.message || 'Lỗi khi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="center-container">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div id="main">
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  CÙNG XEM QUA CÁC
                  <span className="t-gold"> GÓI DU LỊCH</span>
                </h2>
                <h5 className="t-black bot-content">
                  XÁCH BALO LÊN VÀ ĐI THÔI NÀO!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="packages">
        <div className="box-container">
          {products.length > 0 ? (
            products.map((tour) => (
              <div key={tour._id || tour.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <TourCard tour={tour} />
                <Link className="btn" to={`/tour/${tour._id}`}>Đặt ngay</Link>
              </div>
            ))
          ) : (
            <div className="center-container">
              <p>Không có tour nào để hiển thị.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourList;
