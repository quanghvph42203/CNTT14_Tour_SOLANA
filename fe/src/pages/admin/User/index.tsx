
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/common/types/user';
import { Link } from 'react-router-dom';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Có lỗi khi lấy danh sách người dùng!", error);
        setError("Không thể tải danh sách người dùng");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Đang tải danh sách người dùng...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh Sách Người Dùng</h1>
      {users.length === 0 ? (
        <p className="text-center">Không tìm thấy người dùng nào</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-center">Avatar</th>
              <th className="py-2 px-4 border-b text-center">Tên</th>
              <th className="py-2 px-4 border-b text-center">Email</th>
              <th className="py-2 px-4 border-b text-center">Vai Trò</th>
              <th className="py-2 px-4 border-b text-center"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">
                  <img src={user.avatar} className="w-15 h-15 rounded-full" />
                </td>
                <td className="py-2 px-4 border-b text-center">
                <Link to={`/users/${user._id}`} className="text-blue-500 hover:underline">{user.name}</Link>
                </td>
                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">{user.role}</td>
                <td>
                  <Link to={`/users/${user._id}/edit`} className="text-blue-500">Chỉnh sửa</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;

