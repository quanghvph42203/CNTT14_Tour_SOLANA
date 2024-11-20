import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Descriptions,
  Tag,
  Image,
  Button,
  Spin,
  Row,
  Col,
  Typography,
  Card,
  Carousel,
  Space,
} from "antd";
import { getProductById } from "../services/productService";
import { EditOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const { data } = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Failed to load product", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const MAX_DESCRIPTION_LENGTH = 200; // Maximum length of description to show initially

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    );

  // Calculate the tour duration in days and nights
  const calculateTourDuration = (startDate, endDate) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      const nights = days > 0 ? days - 1 : 0; // Number of nights is days - 1
      return { days, nights };
    }
    return { days: 0, nights: 0 };
  };

  const { days, nights } = calculateTourDuration(
    product.startDate,
    product.endDate
  );

  const truncatedDescription =
    product.description.length > MAX_DESCRIPTION_LENGTH
      ? product.description.slice(0, MAX_DESCRIPTION_LENGTH)
      : product.description;

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card
        bordered
        style={{
          borderRadius: 10,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <Row gutter={[32, 32]}>
          {/* Left Section: Carousel for Image Gallery */}
          <Col xs={24} md={10}>
            <Carousel autoplay>
              {product.gallery.length > 0 ? (
                product.gallery.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    width="100%"
                    style={{ borderRadius: 8 }}
                  />
                ))
              ) : (
                <Image
                  src="https://via.placeholder.com/400"
                  width="100%"
                  style={{ borderRadius: 8 }}
                />
              )}
            </Carousel>
          </Col>

          {/* Right Section: Product Details */}
          <Col xs={24} md={14}>
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%", padding: "50px" }}
            >
              <div>
                <Title level={2}>{product.name}</Title>
                <Paragraph type="secondary">
                  {showFullDescription
                    ? product.description
                    : `${truncatedDescription}...`}
                </Paragraph>

                {product.description.length > MAX_DESCRIPTION_LENGTH && (
                  <Button
                    type="link"
                    onClick={handleToggleDescription}
                    style={{ padding: 0 }}
                  >
                    {showFullDescription ? "Thu gọn" : "Xem thêm"}
                  </Button>
                )}
              </div>

              <Descriptions
                bordered
                size="small"
                labelStyle={{ fontWeight: "bold", width: 200 }}
                contentStyle={{ backgroundColor: "#fafafa" }}
                column={1}
              >
                <Descriptions.Item label="Giá">
                  {product.price.toLocaleString()} VND
                </Descriptions.Item>
                <Descriptions.Item label="Giảm giá">
                  {product.discount_price > 0
                    ? `${product.discount_price.toLocaleString()} VND`
                    : "Không có giảm giá"}
                </Descriptions.Item>
                <Descriptions.Item label="Địa điểm">
                  {product.location || "Không có địa điểm"}
                </Descriptions.Item>
                <Descriptions.Item label="Thời gian">
                  {days && nights
                    ? `${days} ngày ${nights} đêm`
                    : "Không có thông tin"}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày bắt đầu">
                  {product.startDate
                    ? new Date(product.startDate).toLocaleDateString()
                    : "Không có ngày bắt đầu"}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày kết thúc">
                  {product.endDate
                    ? new Date(product.endDate).toLocaleDateString()
                    : "Không có ngày kết thúc"}
                </Descriptions.Item>
                <Descriptions.Item label="Sức chứa">
                  {product.capacity || "Không có thông tin"}
                </Descriptions.Item>
                <Descriptions.Item label="Số chỗ còn lại">
                  {product.countInStock || "Không có thông tin"}
                </Descriptions.Item>
                <Descriptions.Item label="Tình trạng">
                  {product.status === "available" ? (
                    <Tag color="green">Có sẵn</Tag>
                  ) : (
                    <Tag color="red">Hết hàng</Tag>
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="Danh mục">
                  {product.category.length > 0 ? (
                    product.category.map((cat, index) => (
                      <Tag key={index} color="blue">
                        {cat}
                      </Tag>
                    ))
                  ) : (
                    <Tag color="red">Không có danh mục</Tag>
                  )}
                </Descriptions.Item>
              </Descriptions>

              <div style={{ display: "flex", gap: 16 }}>
                <Link to={`/admin/products/${product._id}/edit`}>
                  <Button
                    type="default"
                    size="large"
                    icon={<EditOutlined />}
                    style={{ flex: 1 }}
                  >
                    Chỉnh sửa
                  </Button>
                </Link>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetail;
