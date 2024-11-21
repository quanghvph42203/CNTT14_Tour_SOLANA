import Blog from "../models/blog";

// GET: Lấy tất cả blog
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách blog.", error });
  }
};

// GET: Lấy blog theo ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Không tìm thấy blog." });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy blog.", error });
  }
};

// POST: Tạo blog mới
export const createBlog = async (req, res) => {
  const {
    title,
    description,
    imageUrl,
    bannerImage,
    sections,
    recommendations,
  } = req.body;

  const blog = new Blog({
    title,
    description,
    imageUrl,
    bannerImage,
    sections,
    recommendations,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi tạo blog.", error });
  }
};

// PUT: Cập nhật blog theo ID
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    imageUrl,
    link,
    bannerImage,
    sections,
    recommendations,
  } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
        imageUrl,
        link,
        bannerImage,
        sections,
        recommendations,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy blog để cập nhật." });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi cập nhật blog.", error });
  }
};

// DELETE: Xóa blog theo ID
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Không tìm thấy blog để xóa." });
    }

    res.status(200).json({ message: "Xóa blog thành công." });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa blog.", error });
  }
};
