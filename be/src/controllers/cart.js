import Cart from "../models/cart.js"; // Đường dẫn tới file models của bạn
import Product from "../models/product.js"; // Đường dẫn tới models Product của bạn

// Tạo mới giỏ hàng cho người dùng
export const createCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Kiểm tra nếu người dùng đã có giỏ hàng
    let cart = await Cart.findOne({ userId });
    if (cart) {
      return res.status(400).json({ message: "User already has a cart." });
    }

    // Tạo mới giỏ hàng
    cart = new Cart({ userId, products: [] });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error creating cart", error });
  }
};

// Thêm sản phẩm vào giỏ hàng
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Lấy thông tin giỏ hàng
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Lấy thông tin sản phẩm
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Kiểm tra nếu sản phẩm đã có trong giỏ
    const existingProductIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (existingProductIndex !== -1) {
      // Cập nhật số lượng sản phẩm
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      // Thêm sản phẩm mới vào giỏ
      cart.products.push({
        productId,
        quantity,
        price: product.price,
        discount: product.discount || 0,
        finalPrice: product.price - (product.discount || 0),
      });
    }

    // Cập nhật các trường tổng
    cart.updateTotals();
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error });
  }
};

// Lấy thông tin giỏ hàng của người dùng
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate(
      "products.productId",
      "name price"
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart", error });
  }
};

// Cập nhật giỏ hàng
export const updateCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { products } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Cập nhật sản phẩm và số lượng
    cart.products = products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
      price: product.price,
      discount: product.discount || 0,
      finalPrice: product.price - (product.discount || 0),
    }));

    // Cập nhật các trường tổng
    cart.updateTotals();
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error });
  }
};

// Xóa giỏ hàng
export const deleteCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOneAndDelete({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting cart", error });
  }
};
