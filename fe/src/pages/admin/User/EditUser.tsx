import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '@/common/types/user';
import instance from '@/configs/axios';

const EditUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [role, setRole] = useState<string>(''); 
    const [avatar, setAvatar] = useState<File | null>(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await instance.get(`users/${id}`);
                setUser(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
                setRole(response.data.role);
            } catch (error) {
                console.error("Lỗi khi lấy thông tin người dùng!", error);
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('role', role);
        if (avatar) {
            formData.append('avatar', avatar);
        }

        try {
            await instance.put(`users/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccess("Thông tin người dùng đã được cập nhật thành công!");
            setTimeout(() => navigate(`/admin/users/${id}`), 2000); // Chuyển hướng sau 2 giây
        } catch (error) {
            console.error("Lỗi khi cập nhật thông tin người dùng!", error);
            setError("Không thể cập nhật thông tin người dùng");
        }
    };

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
            <h1 className="text-3xl font-bold text-center mb-4">Chỉnh Sửa Thông Tin Người Dùng</h1>
            {success && <p className="text-center text-green-600">{success}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Tên:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="role">Vai Trò:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    >
                        <option value="" disabled>Chọn vai trò</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="avatar">Ảnh đại diện:</label>
                    <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files) {
                                const selectedFile = e.target.files[0];
                                if (selectedFile && selectedFile.type.startsWith('image/')) {
                                    setAvatar(selectedFile);
                                } else {
                                    setError("Vui lòng chọn một tập tin hình ảnh hợp lệ.");
                                }
                            }
                        }}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Cập Nhật
                </button>
            </form>
        </div>
    );
};

export default EditUser;
