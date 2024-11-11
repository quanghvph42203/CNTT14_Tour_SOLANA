import React, { useEffect, useState } from "react";
import { getUser } from "./API";

const UserDetail = ({ userId, onBack }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await getUser(userId);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Chi tiết người dùng</h2>
      <p>
        <strong>Tên:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Vai trò:</strong> {user.role}
      </p>
      <button
        onClick={onBack}
        className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
      >
        Trở lại
      </button>
    </div>
  );
};

export default UserDetail;
