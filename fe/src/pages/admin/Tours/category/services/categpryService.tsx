import instance from "@/configs/axios";

export const getAllCategories = (params) =>
  instance.get("/category", { params });
export const getCategoryById = (id) => instance.get(`/category/${id}`);
export const addCategory = (categoryData) =>
  instance.post("/category", categoryData);
export const updateCategory = (id, categoryData) =>
  instance.put(`/category/${id}`, categoryData);
export const deleteCategory = (id) => instance.delete(`/category/${id}`);
