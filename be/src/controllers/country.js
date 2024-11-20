import Country from "../models/country";

// Tạo một quốc gia mới
export const createCountry = async (req, res) => {
  const { name, slug } = req.body;
  try {
    const newCountry = new Country({ name, slug });
    await newCountry.save();
    res
      .status(201)
      .json({ message: "Quốc gia được tạo thành công!", country: newCountry });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo quốc gia.", error: error.message });
  }
};

// Lấy danh sách tất cả các quốc gia
export const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Lỗi khi lấy danh sách quốc gia.",
        error: error.message,
      });
  }
};

// Lấy thông tin chi tiết một quốc gia theo ID
export const getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) {
      return res.status(404).json({ message: "Không tìm thấy quốc gia." });
    }
    res.status(200).json(country);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Lỗi khi lấy thông tin quốc gia.",
        error: error.message,
      });
  }
};

// Cập nhật thông tin của một quốc gia
export const updateCountry = async (req, res) => {
  const { name, slug } = req.body;
  try {
    const updatedCountry = await Country.findByIdAndUpdate(
      req.params.id,
      { name, slug },
      { new: true }
    );
    if (!updatedCountry) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy quốc gia để cập nhật." });
    }
    res
      .status(200)
      .json({
        message: "Cập nhật quốc gia thành công!",
        country: updatedCountry,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật quốc gia.", error: error.message });
  }
};

// Xóa một quốc gia
export const deleteCountry = async (req, res) => {
  try {
    const deletedCountry = await Country.findByIdAndDelete(req.params.id);
    if (!deletedCountry) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy quốc gia để xóa." });
    }
    res.status(200).json({ message: "Xóa quốc gia thành công!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa quốc gia.", error: error.message });
  }
};
