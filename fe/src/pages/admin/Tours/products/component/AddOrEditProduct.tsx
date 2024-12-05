import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box, Grid, Typography } from "@mui/material";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo";

const AddOrEditProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [attributes, setAttributes] = useState([{ traitType: "", value: "" }]);

  const handleAddAttribute = () => {
    setAttributes([...attributes, { traitType: "", value: "" }]);
  };

  const handleRemoveAttribute = (index) => {
    const newAttributes = attributes.slice();
    newAttributes.splice(index, 1);
    setAttributes(newAttributes);
  };

  const handleAttributeChange = (index, key, value) => {
    const newAttributes = [...attributes];
    newAttributes[index][key] = value;

    if (key === "value") {
      const isImageUrl = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i.test(
        value
      );
      newAttributes[index]["traitType"] = isImageUrl ? "image" : "content";
    }

    setAttributes(newAttributes);
  };

  const handleAddProduct = async () => {
    const url = "https://api.gameshift.dev/nx/unique-assets";
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-key": API_KEY,
    };
    const data = {
      details: {
        collectionId: "69b19639-237f-4966-bbe6-112fb2f5932e",
        description: description,
        imageUrl: imageUrl,
        name: name,
        attributes: attributes.map((attr) => ({
          traitType: attr.traitType,
          value: attr.value,
        })),
      },
      destinationUserReferenceId: "người dùng 1111",
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log(response.data);
      message.success("Thêm TOUR thành công!");
      navigate("/admin/products");
    } catch (error) {
      message.error("Lỗi khi thêm Tour, thử lại đi");
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Thêm hoặc chỉnh sửa sản phẩm
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tên sản phẩm"
            fullWidth
            value={name}
            onChange={(e) => {
              if (e.target.value.length <= 32) {
                setName(e.target.value);
              } else {
                message.warning("Tên sản phẩm không được vượt quá 32 ký tự.");
              }
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Mô tả sản phẩm"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="URL ảnh"
            fullWidth
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box marginTop={3}>
        <Typography variant="h6">Thuộc tính</Typography>
        {attributes.map((attribute, index) => (
          <Grid container spacing={2} key={index} marginBottom={2}>
            <Grid item xs={5}>
              <TextField
                label="Tên thuộc tính"
                fullWidth
                value={attribute.traitType}
                onChange={(e) =>
                  handleAttributeChange(index, "traitType", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Giá trị thuộc tính"
                fullWidth
                value={attribute.value}
                onChange={(e) =>
                  handleAttributeChange(index, "value", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2} alignSelf="center" container spacing={1}>
              <Grid item>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleAddAttribute}
                  fullWidth
                >
                  +
                </Button>
              </Grid>
              {attributes.length > 1 && (
                <Grid item>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemoveAttribute(index)}
                    fullWidth
                  >
                    -
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleAddProduct}
        fullWidth
        style={{ marginTop: "20px" }}
      >
        Thêm sản phẩm
      </Button>
    </Box>
  );
};

export default AddOrEditProduct;
