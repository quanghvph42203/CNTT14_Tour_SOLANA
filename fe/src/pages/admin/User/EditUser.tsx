import instance from '@/configs/axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface IUser {
  name: string;
  email: string;
  role: "user" | "admin";
  avatar: string;
}

const EditUser: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({
    name: '',
    email: '',
    role: 'user',
    avatar: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await instance.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        window.alert('Không thể lấy thông tin người dùng.');
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await instance.put(`/users/${id}`, user);
      window.alert(response.data.message || 'Thông tin người dùng đã được cập nhật thành công.');
      navigate('/admin/users');
    } catch (error) {
      window.alert('Không thể cập nhật người dùng.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Chỉnh sửa thông tin người dùng</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700">Tên:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Vai trò:</label>
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Avatar:</label>
          <input
            type="text"
            name="avatar"
            value={user.avatar}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
};

export default EditUser;
