import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, message, Card, Spin, Space, Modal, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [price, setPrice] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": API_KEY,
      };

      const response = await axios.get("https://api.gameshift.dev/nx/items", {
        headers,
      });

      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);

      const productList = response.data.data
        .map((product) => ({
          id: product.item.id,
          name: product.item.name,
          mintAddress: product.item.mintAddress,
          imageUrl: product.item.imageUrl,
          price: product.item.price?.naturalAmount,
          description: product.item.description,
          created: product.item.created,
        }))
        .filter((product) => {
          const productDate = new Date(product.created);
          productDate.setUTCHours(0, 0, 0, 0);
          return productDate >= today;
        })
        .sort((a, b) => new Date(b.created) - new Date(a.created));

      setProducts(productList);
      setLoading(false);
    } catch (error) {
      message.error("Tải danh sách sản phẩm thất bại");
      setLoading(false);
    }
  };

  const handleSellClick = (id) => {
    setSelectedProductId(id);
    setIsModalVisible(true);
  };

  const handleSellProduct = async () => {
    if (!price) {
      message.error("Vui lòng nhập giá bán");
      return;
    }

    try {
      const url = `https://api.gameshift.dev/nx/unique-assets/${selectedProductId}/list-for-sale`;
      const headers = {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": API_KEY,
      };
      const body = {
        price: {
          currencyId: "USDC",
          naturalAmount: price,
        },
      };

      const response = await axios.post(url, body, { headers });
      const { consentUrl } = response.data;

      if (consentUrl) {
        window.location.href = consentUrl;
      } else {
        message.error("Không thể lấy liên kết bán sản phẩm");
      }

      setIsModalVisible(false);
      setPrice("");
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
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      align: "center",
      render: (text) => (
        <span>{text.length > 30 ? `${text.slice(0, 30)} ......` : text}</span>
      ),
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
            className={`${
              record.price === undefined ? "bg-blue-500" : "bg-[#ff5c01]"
            } text-white font-bold rounded-xl ms-1 hover:bg-[#ff3232]`}
            onClick={() => {
              if (record.price === undefined) handleSellClick(record.id);
            }}
            disabled={record.price !== undefined}
          >
            <span className="p-4">
              {record.price === undefined ? "Bán" : "Đã Bán"}
            </span>
          </Button>
          <Link to={`/admin/products/${record.id}`}>
            <Button className="text-black p-4">Xem chi tiết</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Card
        title="Danh sách sản phẩm"
        extra={
          <Link to="/admin/products/add">
            <Button
              type="primary"
              className="text-white p-4 "
              icon={<PlusOutlined />}
            >
              Thêm Tour
            </Button>
          </Link>
        }
        style={{
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Table
          dataSource={products}
          columns={columns}
          rowKey="mintAddress"
          pagination={{ pageSize: 10 }}
          bordered
          loading={loading}
        />
      </Card>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
          isModalVisible ? "block" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-xl font-semibold mb-4">Nhập giá bán</h2>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Nhập giá (USDC)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setIsModalVisible(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              onClick={handleSellProduct}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
