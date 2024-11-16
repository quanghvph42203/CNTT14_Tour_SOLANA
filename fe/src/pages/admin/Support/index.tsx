import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import instance from "@/configs/axios";

const StyledTableContainer = styled(TableContainer)({
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const SupportManagement = () => {
  const [supportRequests, setSupportRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedMessages, setExpandedMessages] = useState({});

  useEffect(() => {
    const fetchSupportRequests = async () => {
      setLoading(true);
      try {
        const response = await instance.get("/support");
        setSupportRequests(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách yêu cầu hỗ trợ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSupportRequests();
  }, []);

  const handleStatusChange = async (newStatus, requestId) => {
    const isResolved = newStatus === "Đã giải quyết";

    try {
      const response = await instance.put(`/support/${requestId}`, {
        isResolved,
      });

      if (response.status === 200) {
        setSupportRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId ? { ...request, isResolved } : request
          )
        );
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái:", error);
    }
  };

  const toggleMessage = (id) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Quản lý đơn hỗ trợ
      </Typography>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      ) : (
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Mã yêu cầu
                </TableCell>
                <TableCell sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Tên tài khoản
                </TableCell>
                <TableCell sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Nội dung yêu cầu
                </TableCell>
                <TableCell sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Ngày tạo
                </TableCell>
                <TableCell sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Trạng thái
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supportRequests.map((request) => (
                <TableRow key={request._id}>
                  <TableCell sx={{ fontSize: "14px" }}>{request._id}</TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>
                    {request.userName}
                  </TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>
                    {expandedMessages[request._id] ? (
                      <>
                        {request.message}
                        <Button onClick={() => toggleMessage(request._id)}>
                          Thu gọn
                        </Button>
                      </>
                    ) : (
                      <>
                        {request.message.slice(0, 30)}...
                        <Button onClick={() => toggleMessage(request._id)}>
                          Xem thêm...
                        </Button>
                      </>
                    )}
                  </TableCell>
                  <TableCell sx={{ fontSize: "14px" }}>
                    {new Date(request.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={
                        request.isResolved ? "Đã giải quyết" : "Đang xử lý"
                      }
                      onChange={(event) =>
                        handleStatusChange(event.target.value, request._id)
                      }
                      style={{ width: "150px" }}
                      sx={{ fontSize: "14px" }}
                    >
                      <MenuItem value="Đang xử lý">Đang xử lý</MenuItem>
                      <MenuItem value="Đã giải quyết">Đã giải quyết</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
    </div>
  );
};

export default SupportManagement;
