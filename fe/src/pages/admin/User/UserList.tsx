import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./API";

const UserList = ({ onAddUser, onViewDetail, onEditUser }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Danh sách người dùng</h2>
      <button
        onClick={onAddUser}
        className="mb-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Thêm 
      </button>
      <table className="min-w-full table-auto bg-gray-100 border-collapse">
        <thead>
          <tr className="text-left bg-blue-500 text-white">
            
            <th className="px-6 py-3 font-semibold">Tên</th>
            <th className="px-6 py-3 font-semibold">Email</th>
            <th className="px-6 py-3 font-semibold">Vai trò</th>
            <th className="px-6 py-3 font-semibold">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-200">
              
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4 flex space-x-3">
                <button
                  onClick={() => onViewDetail(user._id)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={() => onEditUser(user)}
                  className="text-yellow-500 hover:text-yellow-700 focus:outline-none"
                >
                  Chỉnh sửa
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
