import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import {
  addProduct,
  getProductById,
  updateProduct,
} from "../services/productService";
import { message } from "antd";

const AddOrEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    discount_price: 0,
    countInStock: 0,
    gallery: [],
    location: "",
    categoryId: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) loadProduct();
  }, [id]);

  const loadProduct = async () => {
    setLoading(true);
    try {
      const { data } = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      if (id) {
        await updateProduct(id, formData);
        message.success("Sửa tour thành công");
      } else {
        await addProduct(formData);
        message.success("Thêm tour thành công");
      }
      navigate("/admin/products");
    } catch (error) {
      console.error("Error submitting product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {id ? "Chỉnh Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
      </h2>
      <ProductForm product={product} onSubmit={handleSubmit} />
    </>
  );
};

export default AddOrEditProduct;
