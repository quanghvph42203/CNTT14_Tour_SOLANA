import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '@/common/types/user';

const DetailUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error("Có lỗi khi lấy thông tin người dùng!", error.response || error);
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <p className="text-center">Đang tải thông tin người dùng...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }

    if (!user) {
        return <p className="text-center">Không tìm thấy người dùng.</p>;
    }

    return (
        <div className="container mx-auto p-4">

            

            <div className="mb-4">
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                >
                    Trở về trang chủ
                </button>
            </div>

            <h1 className="text-3xl font-bold text-center mb-4">Thông Tin Chi Tiết Người Dùng</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img 
                        src={user.avatar} 
                        alt={`${user.name}'s avatar`} 
                        className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4" 
                    />
                    <h2 className="text-xl font-semibold">Tên: {user.name}</h2>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-600">Vai Trò: {user.role}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;
