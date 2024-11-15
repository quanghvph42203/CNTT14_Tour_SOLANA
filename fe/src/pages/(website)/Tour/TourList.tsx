import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '@/common/types/product';
import axios from 'axios';

const TourList: React.FC = () => {
  const [tours, setTours] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get<IProduct[]>('http://localhost:8080/api/products');
        setTours(response.data);
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
          {tours.length > 0 ? (
            tours.map((tour) => (
              <div className="box" key={tour._id}>
                <img
                  src={tour.image || '/fallback-image.jpg'} 
                  alt={tour.name}
                />
                <div className="content">
                  <h3>
                    <i className="fas fa-map-marker-alt" /> {tour.location}
                  </h3>
                  <p>{tour.description}</p>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={index < 4 ? 'fas fa-star' : 'far fa-star'}
                      />
                    ))}
                  </div>
                  <div className="price">
                    {tour.discount_price.toLocaleString()} VND{' '}
                    {tour.price && (
                      <span>{tour.price.toLocaleString()} VND</span>
                    )}
                  </div>
                  <Link className="btn" to={`/tour/${tour._id}`}>
                    Đặt ngay
                  </Link>
                </div>
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
