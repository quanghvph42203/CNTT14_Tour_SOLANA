import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
} from "antd";
import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState(product || { gallery: [] });
  const { id } = useParams();

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => onSubmit(formData);

  const handleUploadChange = ({ fileList }) => {
    setFormData({ ...formData, images: fileList });
  };

  // Hàm xử lý khi thay đổi hình ảnh gallery
  const handleGalleryChange = (e) => {
    const value = e.target.value;
    // Chia các giá trị nhập vào thành mảng nếu có dấu phẩy
    const galleryImages = value.split(",").map((item) => item.trim());
    setFormData({ ...formData, gallery: galleryImages });
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={formData}
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#f4f7fa",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
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
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
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
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
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
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Điểm đến" name="location">
            <Input
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Nhập điểm đến"
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Ngày Đi" name="startDate">
            <Input
              type="date"
              value={formData.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              style={{ width: "100%", borderRadius: "8px" }}
              placeholder="Chọn ngày bắt đầu"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Ngày Về"
            name="endDate"
            rules={[
              {
                validator: (_, value) => {
                  if (
                    value &&
                    formData.startDate &&
                    moment(value).isBefore(moment(formData.startDate))
                  ) {
                    return Promise.reject(
                      "Ngày kết thúc không được nhỏ hơn ngày bắt đầu!"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              type="date"
              value={
                formData.endDate
                  ? moment(formData.endDate).format("YYYY-MM-DD")
                  : ""
              }
              onChange={(e) => handleChange("endDate", e.target.value)}
              style={{ width: "100%", borderRadius: "8px" }}
              placeholder="Chọn ngày kết thúc"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Số lượng khách tối đa" name="capacity">
            <InputNumber
              min={0}
              value={formData.capacity}
              onChange={(value) => handleChange("capacity", value)}
              placeholder="Nhập số lượng khách tối đa"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Số chỗ còn trống" name="countInStock">
            <InputNumber
              min={0}
              value={formData.countInStock}
              onChange={(value) => handleChange("countInStock", value)}
              placeholder="Nhập số chỗ còn trống"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Danh mục" name="category">
            <Select
              mode="tags"
              value={formData.category || []} // Ensure category is an array
              onChange={(value) => handleChange("category", value)}
              placeholder="Chọn danh mục"
              style={{
                width: "100%",
                fontSize: "16px",
                height: "45px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Select.Option value="tour">Tour</Select.Option>
              <Select.Option value="hotel">Hotel</Select.Option>
              <Select.Option value="activity">Activity</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Nhập URL hình ảnh"
            name="image"
            rules={[{ required: false, message: "Nhập đường dẫn URL ảnh" }]}
          >
            <Input
              placeholder="Nhập URL của hình ảnh"
              value={formData.image}
              onChange={(e) => handleChange("image", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>
        {/* gallery */}
        <Col span={24}>
          <Form.Item label="Gallery" name="gallery">
            <Select
              mode="tags"
              value={formData.gallery || []}
              onChange={(value) => handleGalleryChange(value)}
              placeholder="Nhập các URL ảnh, ngăn cách bằng dấu phẩy"
              style={{
                width: "100%",
                fontSize: "16px",
                height: "45px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Mô tả" name="description">
        <TextArea
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Nhập mô tả sản phẩm"
          rows={4}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        />
      </Form.Item>

      {/* <Form.Item label="Trạng thái" name="status" valuePropName="checked">
        <Switch
          checked={formData.status}
          onChange={(checked) => handleChange("status", checked)}
        />
      </Form.Item> */}

      <Form.Item style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: "#4e73df",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
