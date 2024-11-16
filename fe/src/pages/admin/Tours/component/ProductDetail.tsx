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
  Divider,
  Carousel,
  Space,
} from "antd";
import { getProductById } from "../services/productService";
import { ShoppingCartOutlined, EditOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    );

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

          {/* Right Section: product Details */}
          <Col xs={24} md={14}>
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%", padding: "50px" }}
            >
              <div>
                <Title level={2}>{product.name}</Title>
                <Paragraph type="secondary">{product.description}</Paragraph>
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
                  {product.destination || "Không có địa điểm"}
                </Descriptions.Item>
                <Descriptions.Item label="Thời gian">
                  {product.duration || "Không có thông tin"}
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
                  {product.availability || "Không có thông tin"}
                </Descriptions.Item>
                <Descriptions.Item label="Tags">
                  {product.tags && product.tags.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <Tag key={index} color="blue">
                        {tag}
                      </Tag>
                    ))
                  ) : (
                    <Tag color="red">Không có tags</Tag>
                  )}
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
