import axios from "axios";
import { IProduct } from "@/common/types/product";
import { message } from "antd";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

export const loadProductDetail = async (
  id: string
): Promise<IProduct | null> => {
  try {
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": API_KEY,
    };

    const response = await axios.get(
      `https://api.gameshift.dev/nx/items/${id}`,
      {
        headers,
      }
    );

    const productDetail: IProduct = {
      name: response.data.item.name,
      price: response.data.item.price?.naturalAmount,
      image: response.data.item.imageUrl,
      description: response.data.item.description,
      id: response.data.item.id,
      attributes: response.data.item.attributes || [],
    };

    return productDetail;
  } catch (error) {
    message.error("Tải thông tin sản phẩm thất bại");
    console.error("Failed to load product detail", error);
    return null;
  }
};

export const loadRelatedTours = async (): Promise<IProduct[]> => {
  try {
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": API_KEY,
    };

    const response = await axios.get("https://api.gameshift.dev/nx/items", {
      headers,
    });

    const filterTimestamp = 1733392120175;

    const productList = response.data.data
      .map((product) => ({
        id: product.item.id,
        name: product.item.name,
        mintAddress: product.item.mintAddress,
        image: product.item.imageUrl,
        price: product.item.price?.naturalAmount,
        description: product.item.description,
        created: product.item.created,
      }))
      .filter((product) => product.created >= filterTimestamp) // Lọc theo timestamp mốc
      .sort((a, b) => b.created - a.created);
    return productList;
  } catch (error) {
    message.error("Tải danh sách sản phẩm thất bại");
    console.error("Failed to load related tours", error);
    return [];
  }
};
