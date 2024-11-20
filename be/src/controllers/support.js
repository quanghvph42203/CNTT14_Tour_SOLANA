import SupportRequest from "../models/Support.js";
import User from "../models/user.js"; 

// Hàm lấy tất cả yêu cầu hỗ trợ
export const getAllSupportRequests = async (req, res) => {
  try {
    const supportRequests = await SupportRequest.find();

    if (supportRequests.length === 0) {
      return res.status(404).json({
        message: "Không có yêu cầu hỗ trợ nào.",
      });
    }

    return res.status(200).json(supportRequests);
  } catch (error) {
    console.error("Lỗi khi lấy yêu cầu hỗ trợ", error);
    return res.status(500).json({
      error: "Đã xảy ra lỗi khi lấy yêu cầu hỗ trợ.",
    });
  }
};

// Hàm xử lý gửi yêu cầu hỗ trợ
export const sendSupportRequest = async (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({
      error: "Cần phải cung cấp ID người dùng và nội dung yêu cầu hỗ trợ.",
    });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        error: "Người dùng không tồn tại.",
      });
    }

    const supportRequest = new SupportRequest({
      userId,
      message,
      userName: user.name, 
    });

    await supportRequest.save();

    return res.status(200).json({
      message: "Yêu cầu hỗ trợ đã được gửi thành công.",
    });
  } catch (error) {
    console.error("Lỗi khi lưu yêu cầu hỗ trợ", error);
    return res.status(500).json({
      error: "Đã xảy ra lỗi khi gửi yêu cầu hỗ trợ.",
    });
  }
};

// update support
export const updateSupportRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { isResolved } = req.body;

  if (typeof isResolved !== "boolean") {
    return res
      .status(400)
      .json({ error: "Trạng thái 'isResolved' phải là kiểu boolean." });
  }

  try {
    const updatedSupportRequest = await SupportRequest.findByIdAndUpdate(
      id,
      { isResolved },
      { new: true }
    );

    if (!updatedSupportRequest) {
      return res
        .status(404)
        .json({ error: "Không tìm thấy yêu cầu hỗ trợ với ID này." });
    }

    return res.status(200).json({
      message: "Cập nhật trạng thái thành công.",
      updatedSupportRequest,
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật trạng thái yêu cầu hỗ trợ", error);
    return res
      .status(500)
      .json({ error: "Đã xảy ra lỗi khi cập nhật trạng thái." });
  }
};
