import { StatusCodes } from "http-status-codes";
import Product from "../models/product";
import Category from "../models/category";
import slugify from "slugify";
import mongoose from "mongoose";

// Create a new product

export const create = async (req, res) => {
  try {
    const { name, price, discount = 0, categoryId, ...rest } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !price || !categoryId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Tên, giá sản phẩm và danh mục là bắt buộc!",
      });
    }

    // Kiểm tra categoryId có hợp lệ
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "categoryId không hợp lệ!",
      });
    }

    // Kiểm tra danh mục có tồn tại
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Danh mục không tồn tại!",
      });
    }

    // Tạo slug từ tên sản phẩm
    const slug = slugify(name, { lower: true, strict: true });

    // Kiểm tra slug trùng lặp
    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return res.status(StatusCodes.CONFLICT).json({
        message: "Sản phẩm với tên này đã tồn tại!",
      });
    }

    // Tính giá sau khi giảm
    const discount_price = price - discount;

    // Chuẩn bị dữ liệu sản phẩm
    const productData = {
      ...rest,
      name,
      slug,
      price,
      discount,
      discount_price,
      categoryId,
    };

    // Tạo sản phẩm
    const product = await Product.create(productData);

    // Populate thông tin danh mục
    const populatedProduct = await Product.findById(product._id).populate(
      "categoryId",
      "name description" // Lấy các trường cần thiết của danh mục
    );

    return res.status(StatusCodes.CREATED).json({
      message: "Sản phẩm đã được tạo thành công!",
      product: populatedProduct,
    });
  } catch (error) {
    console.error("Lỗi khi tạo sản phẩm:", error);

    // Gửi phản hồi lỗi chi tiết
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Đã xảy ra lỗi khi tạo sản phẩm!",
      error: error.message || error,
    });
  }
};

// Get all products with pagination, sorting, and expand option
// export const getAllProducts = async (req, res) => {
//   const {
//     _page = 1,
//     _limit = 10,
//     _sort = "createdAt",
//     _order = "asc",
//     _expand,
//   } = req.query;

//   const options = {
//     page: _page,
//     limit: _limit,
//     sort: { [_sort]: _order === "desc" ? -1 : 1 },
//   };

//   const populateOptions = _expand ? [{ path: "category", select: "name" }] : [];

//   try {
//     const result = await Product.paginate(
//       { categoryId: null }, // Can be modified based on actual filtering needs
//       { ...options, populate: populateOptions }
//     );

//     if (result.docs.length === 0)
//       return res.status(StatusCodes.OK).json({ data: [] });

//     const response = {
//       data: result.docs,
//       pagination: {
//         currentPage: result.page,
//         totalPages: result.totalPages,
//         totalItems: result.totalDocs,
//       },
//     };
//     return res.status(StatusCodes.OK).json(response);
//   } catch (error) {
//     return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
//   }
// };
export const getAllProducts = async (req, res) => {
  try {
    // Lấy tất cả sản phẩm từ database
    const products = await Product.find(); // Không phân trang, không sắp xếp

    // Trả về dữ liệu
    return res.status(StatusCodes.OK).json({ data: products });
  } catch (error) {
    // Nếu có lỗi, trả về lỗi server
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Không thể lấy dữ liệu sản phẩm",
      error: error.message,
    });
  }
};

// Get a product by its ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không tìm thấy sản phẩm nào!" });

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

// Delete a product by its ID
export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không tìm thấy sản phẩm nào để xóa!" });

    return res
      .status(StatusCodes.OK)
      .json({ message: "Sản phẩm đã được xóa!" });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

// Update a product by its ID
export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không tìm thấy sản phẩm nào để cập nhật!" });

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

// Get related products (same category, excluding the current product)
export const related = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.categoryId,
      _id: { $ne: req.params.productId },
    });
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
