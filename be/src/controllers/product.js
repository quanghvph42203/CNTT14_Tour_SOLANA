
import { StatusCodes } from "http-status-codes";
import Product from "../models/product";
import slugify from "slugify";

// Create a new product
export const create = async (req, res) => {
  try {
    const { name, price, discount, ...rest } = req.body;

    // Tạo slug từ tên sản phẩm
    const slug = slugify(name, { lower: true, strict: true });

    // Tính giá sau khi giảm (nếu có giảm giá)
    const discount_price = discount ? price - (price * discount) / 100 : price;

    const productData = {
      ...rest,
      name,
      slug,
      price,
      discount,
      discount_price, // Lưu giá sau khi giảm vào schema
    };

    const product = await Product.create(productData);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};


// Get all products with pagination, sorting, and expand option
export const getAllProducts = async (req, res) => {
  const {
    _page = 1,
    _limit = 10,
    _sort = "createdAt",
    _order = "asc",
    _expand,
  } = req.query;

  const options = {
    page: _page,
    limit: _limit,
    sort: { [_sort]: _order === "desc" ? -1 : 1 },
  };

  const populateOptions = _expand ? [{ path: "category", select: "name" }] : [];

  try {
    const result = await Product.paginate(
      { categoryId: null }, // Can be modified based on actual filtering needs
      { ...options, populate: populateOptions }
    );

    if (result.docs.length === 0)
      return res.status(StatusCodes.OK).json({ data: [] });

    const response = {
      data: result.docs,
      pagination: {
        currentPage: result.page,
        totalPages: result.totalPages,
        totalItems: result.totalDocs,
      },
    };
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
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

