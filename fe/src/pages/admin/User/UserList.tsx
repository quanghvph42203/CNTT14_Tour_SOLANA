import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "./API";
import axios from "axios";
export interface User {
    referenceId: string;
    email: string;
}
const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const handlereffect = async () => {
            const url = "https://api.gameshift.dev/nx/users";
            const headers = {
                accept: "application/json",
                "content-type": "application/json",
                "x-api-key":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
            };
            try {
                const response = await axios.get(url, { headers });
                console.log("Response data:", response.data);
                if (Array.isArray(response.data.data)) {
                    setUsers(response.data.data);
                } else {
                    console.error(
                        "Expected array but received:",
                        response.data.data
                    );
                }
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };
        handlereffect();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Danh sách người dùng
            </h2>
            <table className="min-w-full table-auto bg-gray-100 border-collapse">
                <thead>
                    <tr className="text-left bg-blue-500 text-white">
                        <th className="px-6 py-3 font-semibold">
                            {" "}
                            Reference ID
                        </th>
                        <th className="px-6 py-3 font-semibold">Email</th>
                        {/* <th className="px-6 py-3 font-semibold">Vai trò</th>
                        <th className="px-6 py-3 font-semibold">Hành động</th> */}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) &&
                        users.map((user) => (
                            <tr
                                key={user.referenceId}
                                className="hover:bg-gray-50"
                            >
                                <td className="py-2 px-4 border-b text-gray-800">
                                    {user.referenceId}
                                </td>
                                <td className="py-2 px-4 border-b text-gray-800">
                                    {user.email}
                                </td>
                                {/* <td className="py-2 px-4 border-b text-gray-800">
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all">
                                        Edit
                                    </button>
                                    <button className="ml-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-all">
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
