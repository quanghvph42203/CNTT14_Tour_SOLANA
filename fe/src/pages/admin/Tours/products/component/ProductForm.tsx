import instance from "@/configs/axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState(
    product || { gallery: [], status: false }
  );
  const { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await instance.get("/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Lỗi khi tải danh mục:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleGalleryChange = (e) => {
    const value = e.target.value;
    const galleryImages = value.split(",").map((item) => item.trim());
    setFormData({ ...formData, gallery: galleryImages });
  };
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.checked });
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#f4f7fa",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={handleSubmit} method="POST">
        <Grid container spacing={2}>
          {/* tên */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tên sản phẩm"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              placeholder="Nhập tên sản phẩm"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* giá */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Giá"
              name="price"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              required
              type="number"
              placeholder="Nhập giá sản phẩm"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* giảm giá */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Giảm giá"
              name="discount_price"
              value={formData.discount_price}
              onChange={(e) => handleChange("discount_price", e.target.value)}
              type="number"
              placeholder="Nhập giá giảm"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* điểm đến */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Điểm đến"
              name="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Nhập điểm đến"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* ngày đi , ngày về*/}
          <Grid item xs={8} sm={6} className="flex gap-6">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Ngày Đi"
                type="date"
                value={formatDate(formData.startDate)}
                onChange={(e) => handleChange("startDate", e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  fontSize: "30px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Ngày Về"
                type="date"
                value={formatDate(formData.endDate)}
                onChange={(e) => handleChange("endDate", e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  fontSize: "30px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
          {/* danh muc */}

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Danh mục</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={formData.categoryId || ""}
                onChange={(e) => handleChange("categoryId", e.target.value)}
                label="Danh mục"
                sx={{
                  fontSize: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* khách tối đa */}

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Số lượng khách tối đa"
              name="capacity"
              value={formData.capacity}
              onChange={(e) => handleChange("capacity", e.target.value)}
              type="number"
              placeholder="Nhập số lượng khách tối đa"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* chỗ trống */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Số chỗ còn trống"
              name="countInStock"
              value={formData.countInStock}
              onChange={(e) => handleChange("countInStock", e.target.value)}
              type="number"
              placeholder="Nhập số chỗ còn trống"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* ảnh */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nhập URL hình ảnh"
              name="image"
              value={formData.image}
              onChange={(e) => handleChange("image", e.target.value)}
              placeholder="Nhập URL của hình ảnh"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* ảnh phụ */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Gallery"
              name="gallery"
              value={formData.gallery.join(", ")}
              onChange={handleGalleryChange}
              placeholder="Nhập các URL ảnh, ngăn cách bằng dấu phẩy"
              sx={{
                fontSize: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          {/* mô tả */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.status === "outstanding"}
                  onChange={(e) =>
                    handleChange(
                      "status",
                      e.target.checked ? "outstanding" : "notoutstanding"
                    )
                  }
                  color="primary"
                />
              }
              label="Trạng thái"
            />
          </Grid>
          {/* submit */}
          <Grid item xs={12}>
            <Grid item xs={12} className="flex justify-center gap-6 mt-6">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "8px 30px",
                  borderRadius: "10px",
                  backgroundColor: "#42a5f5",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1e88e5",
                  },
                }}
                variant="contained"
                type="submit"
              >
                {id ? "Cập nhật" : "Thêm mới"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ProductForm;
