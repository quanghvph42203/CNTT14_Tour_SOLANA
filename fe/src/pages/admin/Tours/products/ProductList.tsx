import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, message, Card, Spin, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
      };

      const response = await axios.get("https://api.gameshift.dev/nx/items", {
        headers,
      });

      const productList = response.data.data
        .map((product) => ({
          id: product.item.id,
          name: product.item.name,
          mintAddress: product.item.mintAddress,
          imageUrl: product.item.imageUrl,
          description: product.item.description,
          created: product.item.created,
        }))
        .sort((a, b) => new Date(b.created) - new Date(a.created));

      setProducts(productList);
      setLoading(false);
    } catch (error) {
      message.error("Tải danh sách sản phẩm thất bại");
      setLoading(false);
    }
  };

  // bán tour
  const sellProduct = async (id) => {
    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${id}/list-for-sale`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        // tạo ở setting
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
      };
      const body = {
        price: {
          currencyId: "USDC",
          naturalAmount: "0.1",
        },
      };

      const response = await axios.post(url, body, { headers });
      const { consentUrl } = response.data;

      if (consentUrl) {
        window.location.href = consentUrl;
      } else {
        message.error("Không thể lấy liên kết bán sản phẩm");
      }
    } catch (error) {
      message.error("Bán sản phẩm thất bại");
    }
  };

  const columns = [
    {
      title: "STT",
      key: "serial",
      align: "center",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      align: "center",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Ảnh",
      dataIndex: "imageUrl",
      key: "imageUrl",
      align: "center",
      render: (url) => (
        <img
          src={url}
          alt="Product"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Mint Address",
      dataIndex: "mintAddress",
      key: "mintAddress",
      align: "center",
      render: (text) => (
        <span>
          {text.length > 10 ? `${text.slice(0, 10)}...` : text}{" "}
          {text.length > 10 && (
            <Button
              type="link"
              className="text-blue-500"
              onClick={() => message.info(text)}
            >
              Xem thêm
            </Button>
          )}
        </span>
      ),
    },

    {
      title: "Ngày tạo",
      dataIndex: "created",
      key: "created",
      align: "center",
      render: (timestamp) => (
        <span>{new Date(timestamp).toLocaleString()}</span>
      ),
    },
    {
      title: "Hành động",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            className="p-4 text-white"
            onClick={() => sellProduct(record.id)}
          >
            Bán Tour
          </Button>
          <Link to={`/admin/products/${record.id}`}>
            <Button type="default" className="p-4">
              Xem chi tiết
            </Button>
          </Link>
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
        rowKey="mintAddress" // Use an appropriate unique key
        pagination={{ pageSize: 10 }}
        bordered
        loading={loading}
      />
    </Card>
  );
};

export default ProductList;
