import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Modal, message, Space, Card, Spin } from "antd";
import { deleteProduct, getAllProducts } from "./services/productService";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await getAllProducts();

      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      message.error("Tải danh sách sản phẩm thất bại");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Xóa sản phẩm",
      content: "Bạn có chắc chắn muốn xóa sản phẩm này?",
      onOk: async () => {
        try {
          await deleteProduct(id);
          message.success("Sản phẩm đã được xóa thành công");
          loadProducts();
        } catch (error) {
          message.error("Xóa sản phẩm thất bại");
        }
      },
    });
  };

  const columns = [
    {
      title: <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>Tên Tour</h2>,
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text, record) => (
        <Link
          to={`/products/${record._id}`}
          style={{ fontWeight: "bold", color: "#1890ff" }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: (
        <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>Giá Tour (VND)</h2>
      ),
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (price) => <span>{price.toLocaleString()}</span>,
    },
    {
      title: (
        <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>Giảm giá (VND)</h2>
      ),
      dataIndex: "discount_price",
      key: "discount_price",
      align: "center",
      render: (discount) => (
        <span>{discount ? discount.toLocaleString() : "Không có"}</span>
      ),
    },
    {
      title: (
        <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>
          Số lượng chỗ trống
        </h2>
      ),
      dataIndex: "countInStock",
      key: "countInStock",
      align: "center",
      render: (count) => (
        <span style={{ color: count > 0 ? "green" : "red" }}>
          {count > 0 ? `${count} chỗ` : "Hết chỗ"}
        </span>
      ),
    },
    {
      title: <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>Địa điểm</h2>,
      dataIndex: "location",
      key: "location",
      align: "center",
    },
    {
      title: (
        <h2 style={{ fontSize: "20px", paddingTop: "10px" }}>Hành động</h2>
      ),
      key: "action",
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/admin/products/${record._id}`}>
            <Button
              icon={<EyeOutlined />}
              style={{ padding: "10px" }}
              type="default"
            >
              Chi tiết
            </Button>
          </Link>
          <Link to={`/admin/products/${record._id}/edit`}>
            <Button
              icon={<EditOutlined />}
              style={{ padding: "10px", color: "black" }}
              type="primary"
            >
              Sửa
            </Button>
          </Link>
          <Button
            icon={<DeleteOutlined />}
            style={{ padding: "10px" }}
            type="primary"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  if (loading)
    return (
      <Spin
        size="large"
        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
      />
    );

  return (
    <Card
      title="Danh sách sản phẩm"
      extra={
        <Link to="/admin/products/add">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ color: "white", padding: "10px" }}
          >
            Thêm sản phẩm mới
          </Button>
        </Link>
      }
      style={{
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Table
        dataSource={products}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 30 }}
        bordered
        loading={loading}
      />
    </Card>
  );
};

export default ProductList;
