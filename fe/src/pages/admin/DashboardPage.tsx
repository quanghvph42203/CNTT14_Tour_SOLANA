import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Table, Statistic, Row, Col, Divider, message } from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các thành phần cần thiết cho Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [highlightedTours, setHighlightedTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJkZGQyYWZlMS1mNjQ0LTQ4MmMtYTE1Mi01ZGYxNDcxNDg5YmUiLCJzdWIiOiJlZjZlMjQwMS1iMjJkLTQ3NzQtODZkNy0yNjRiNmZjZGNjM2UiLCJpYXQiOjE3MzMzNTgwOTR9.0U72URFblRgXKu-FR8oAaO04c1_Wsyir95ggvBXpImU",
      };

      const productsResponse = await axios.get(
        "https://api.gameshift.dev/nx/items",
        { headers }
      );
      const productsData = productsResponse.data.data.map((product) => ({
        id: product.item.id,
        name: product.item.name,
        mintAddress: product.item.mintAddress,
        created: product.item.created,
      }));

      const highlightedToursData = productsData
        .map((product) => ({
          id: product.id,
          name: product.name,
          created: product.created,
        }))
        .sort((a, b) => new Date(b.created) - new Date(a.created))
        .slice(0, 5); // Assume top 5 tours are highlighted

      const usersResponse = await axios.get(
        "https://api.gameshift.dev/nx/users",
        { headers }
      );
      const usersData = usersResponse.data.data;

      setProducts(productsData);
      setHighlightedTours(highlightedToursData);
      setUsers(usersData);
      setLoading(false);
    } catch (error) {
      message.error("Không thể tải dữ liệu");
      setLoading(false);
    }
  };

  // Helper functions for product statistics
  const calculateProductStats = () => {
    const productsByDate = products.reduce((acc, product) => {
      const date = new Date(product.created).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
    return { total: products.length, productsByDate };
  };

  // Helper functions for user statistics
  const calculateUserStats = () => {
    const usersByDate = users.reduce((acc, user) => {
      const date = new Date(user.createdAt).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
    return { total: users.length, usersByDate };
  };

  const productStats = calculateProductStats();
  const userStats = calculateUserStats();

  const calculateTourStats = () => {
    const toursByDate = highlightedTours.reduce((acc, tour) => {
      const date = new Date(tour.created).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
    return { total: highlightedTours.length, toursByDate };
  };

  const tourStats = calculateTourStats();

  // Cấu hình cho biểu đồ cột
  const chartData = (data) => ({
    labels: Object.keys(data), // Các ngày
    datasets: [
      {
        label: "Số lượng theo ngày",
        data: Object.values(data), // Số lượng theo ngày
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Màu của cột
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-5">
      {/* Thống kê sản phẩm, người dùng và Tour nổi bật trên 1 hàng ngang */}
      <Row gutter={16}>
        {/* Thống kê sản phẩm */}
        <Col span={8}>
          <Card title="Thống kê sản phẩm" className="mb-5">
            <Divider />
            <h4 className="text-xl font-semibold mt-3">
              Phân phối sản phẩm theo ngày:
            </h4>
            <Bar
              data={chartData(productStats.productsByDate)}
              options={{ responsive: true }}
            />
          </Card>
        </Col>

        {/* Thống kê người dùng */}
        <Col span={8}>
          <Card title="Thống kê người dùng" className="mb-5">
            <Divider />
            <h4 className="text-xl font-semibold mt-3">
              Phân phối người dùng theo ngày:
            </h4>
            <Bar
              data={chartData(userStats.usersByDate)}
              options={{ responsive: true }}
            />
          </Card>
        </Col>

        {/* Thống kê Tour nổi bật */}
        <Col span={8}>
          <Card title="Thống kê Tour nổi bật" className="mb-5">
            <Divider />
            <h4 className="text-xl font-semibold mt-3">
              Phân phối Tour nổi bật theo ngày:
            </h4>
            <Bar
              data={chartData(tourStats.toursByDate)}
              options={{ responsive: true }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
