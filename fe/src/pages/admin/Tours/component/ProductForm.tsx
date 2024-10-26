import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  Row,
  Col,
  Space,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => onSubmit(formData);

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={formData}
      style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              { required: true, message: "Tên sản phẩm không được để trống!" },
            ]}
          >
            <Input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Nhập tên sản phẩm"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Giá"
            name="price"
            rules={[
              { required: true, message: "Giá sản phẩm không được để trống!" },
            ]}
          >
            <InputNumber
              min={0}
              value={formData.price}
              onChange={(value) => handleChange("price", value)}
              placeholder="Nhập giá sản phẩm"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Giảm giá" name="discount_price">
            <InputNumber
              min={0}
              value={formData.discount_price}
              onChange={(value) => handleChange("discount_price", value)}
              placeholder="Nhập giá giảm"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Tồn kho"
            name="countInStock"
            rules={[
              {
                required: true,
                message: "Số lượng tồn kho không được để trống!",
              },
            ]}
          >
            <InputNumber
              min={0}
              value={formData.countInStock}
              onChange={(value) => handleChange("countInStock", value)}
              placeholder="Nhập số lượng tồn kho"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Mô tả" name="description">
            <TextArea
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Nhập mô tả sản phẩm"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Thư viện ảnh" name="gallery">
            <Select
              mode="tags"
              value={formData.gallery}
              onChange={(value) => handleChange("gallery", value)}
              placeholder="Nhập URL ảnh"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Địa điểm"
            name="location"
            rules={[
              { required: true, message: "Địa điểm không được để trống!" },
            ]}
          >
            <Input
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Nhập địa điểm"
            />
          </Form.Item>
        </Col>
      </Row>

      <Space
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            padding: 20,
            color: "white",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {product.id ? "Cập Nhật Sản Phẩm" : "Thêm Sản Phẩm"}
        </Button>
      </Space>
    </Form>
  );
};

export default ProductForm;
