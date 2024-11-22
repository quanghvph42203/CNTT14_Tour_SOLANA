import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryForm from "./CategForm";
import {
  addCategory,
  getCategoryById,
  updateCategory,
} from "../services/categpryService";
import { message } from "antd";

const AddOrEditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) loadCategory();
  }, [id]);

  const loadCategory = async () => {
    setLoading(true);
    try {
      const { data } = await getCategoryById(id);
      setCategory(data);
    } catch (error) {
      console.error("Error loading category:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    if (id) {
      await updateCategory(id, formData);
      message.success("sửa địa điểm thành công");
    } else {
      await addCategory(formData);
      message.success("thêm địa điểm thành công");
      setCategory({
        name: "",
        description: "",
      });
    }
    navigate("/admin/category");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {id ? "Chỉnh Sửa Danh Mục" : "Thêm Danh Mục Mới"}
      </h2>
      <CategoryForm category={category} onSubmit={handleSubmit} />
    </>
  );
};

export default AddOrEditCategory;
