import Category from "../models/category.js";
// Lấy tất cả
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Lấy một
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Không tìm thấy category" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Thêm mới 
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res
      .status(201)
      .json({ message: "Sản phẩm đã được tạo thành công!", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Cập nhật 
export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Không tìm thấy category" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Xóa 
export const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Không tìm thấy category" });
    }
    res.status(200).json({ message: "Xóa thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
