import instance from "@/configs/axios";

export const getAllProducts = (params) => instance.get("/products", { params });
export const getProductById = (id) => instance.get(`/products/${id}`);
export const addProduct = (productData) =>
  instance.post("/products/add", productData);
export const updateProduct = (id, productData) =>
  instance.put(`/products/${id}`, productData);
export const deleteProduct = (id) => instance.delete(`/products/${id}`);
export const getRelatedProducts = (categoryId, productId) =>
  instance.get(`/products/related/${categoryId}/${productId}`);
