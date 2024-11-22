import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const CategoryForm = ({ category, onSubmit }) => {
  const [formData, setFormData] = useState(category);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngừng hành động mặc định của form
    onSubmit(formData);
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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tên Danh Mục"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              placeholder="Nhập tên danh mục"
              sx={{
                fontSize: "18px", // Tăng kích thước font chữ
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mô Tả"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              multiline
              rows={4}
              placeholder="Nhập mô tả danh mục"
              sx={{
                fontSize: "18px", // Tăng kích thước font chữ
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                borderRadius: "8px",
                fontSize: "18px", // Tăng kích thước font chữ
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {category.id ? "Cập nhật danh mục" : "Thêm danh mục"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CategoryForm;
