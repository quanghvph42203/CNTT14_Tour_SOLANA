import { Card, Row, Spin, Typography, Col, Divider } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  object-fit: cover;
  border: 4px solid #e6e6e6;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": API_KEY,
      };

      const response = await axios.get(
        `https://api.gameshift.dev/nx/items/${id}`,
        { headers }
      );

      const productData = response.data;

      setProduct({
        id: productData.item.id,
        name: productData.item.name,
        mintAddress: productData.item.mintAddress,
        imageUrl: productData.item.imageUrl,
        description: productData.item.description,
        attributes: productData.item.attributes,
        owner: productData.item.owner,
        address: productData.item.owner.address,
        referenceId: productData.item.owner.referenceId,
        created: productData.item.created,
      });
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
    <Container>
      <Card
        bordered={false}
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <Row justify="center" style={{ marginBottom: 20 }}>
          <Col>
            <ProductImage
              src={product.imageUrl || "https://via.placeholder.com/300"}
              alt={product.name}
            />
          </Col>
        </Row>
        <Typography.Title
          level={2}
          style={{ textAlign: "center", marginBottom: 15 }}
        >
          {product.name || "Tên sản phẩm không có"}
        </Typography.Title>
        <Divider />
        <Typography.Paragraph style={{ color: "#555", lineHeight: 1.6 }}>
          <strong>Mô tả:</strong> {product.description || "Không có mô tả"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Mint Address:</strong>{" "}
          {product.mintAddress || "Không có địa chỉ"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Người sở hữu:</strong>{" "}
          {product.referenceId || "Không có thông tin"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Địa chỉ người sở hữu:</strong>{" "}
          {product.address || "Không có thông tin"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Thuộc tính:</strong>
          {product.attributes && product.attributes.length > 0
            ? product.attributes.map((attr, index) => (
                <span key={index}>
                  {attr.traitType}: {attr.value}
                  {index < product.attributes.length - 1 && ", "}
                </span>
              ))
            : "Không có thuộc tính"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Ngày tạo:</strong>
          {product.created
            ? new Date(product.created).toLocaleDateString()
            : "Không có ngày tạo"}
        </Typography.Paragraph>
      </Card>
    </Container>
  );
};

export default ProductDetail;
