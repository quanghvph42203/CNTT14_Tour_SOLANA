import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/login.css";
import Swal from "sweetalert2";
const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [referenceId, setReferenceId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Hàm kiểm tra thông tin người dùng có trùng khớp trên hệ thống không
    const checkUserExists = async (email: string, referenceId: string) => {
        const url = "https://api.gameshift.dev/nx/users"; // Endpoint lấy dữ liệu người dùng
        const headers = {
            accept: "application/json",
            "content-type": "application/json",
            "x-api-key":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo", // Thay bằng API key chính xác
        };

        try {
            const response = await axios.get(url, { headers });

            if (response.data && Array.isArray(response.data.data)) {
                // So sánh dữ liệu nhập vào với dữ liệu trả về từ API
                const user = response.data.data.find(
                    (user: any) =>
                        user.email === email && user.referenceId === referenceId
                );
                localStorage.setItem("user", JSON.stringify(user));
                if (user) {
                    return true; // Đăng nhập thành công
                } else {
                    return false; // Dữ liệu không trùng
                }
            } else {
                console.error("Không tìm thấy dữ liệu người dùng.");
                return false;
            }
        } catch (err) {
            console.error("Lỗi khi lấy dữ liệu người dùng:", err);
            return false;
        }
    };

    // Hàm xử lý submit form đăng nhập
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Kiểm tra xem người dùng có tồn tại với email và referenceId nhập vào không
        const isUserValid = await checkUserExists(email, referenceId);

        if (isUserValid) {
            // alert("Đăng nhập thành công!");
            Swal.fire({
                title: "Good job!",
                text: "Đăng Nhập Thành Công",
                icon: "success",
            });
            setTimeout(() => {
                nav("/");
            }, 2000);

            // Tiến hành xử lý sau khi đăng nhập thành công, ví dụ: chuyển hướng người dùng
        } else {
            setError("Thông tin đăng nhập không chính xác.");
        }

        setLoading(false);
    };

    return (
        <div id="main">
            {/* <!-- LOGIN --> */}
            <div id="login">
                <div className="login-banner">
                    <div className="uilogin ">
                        <div className="login-top ">
                            <img
                                src="../../../../public/img/GoodTrip5.png"
                                alt="Logonav"
                                style={{ marginLeft: "250px" }}
                            />
                            <h1>
                                ĐĂNG NHẬP VÀO{" "}
                                <span style={{ color: "#06aa2a" }}>
                                    GOODTRIP
                                </span>
                            </h1>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="login-mid">
                                <div className="mb-[40px]">
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="font-bold text-2xl absolute -top-10 left-[110px]"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            // className="p-2 border border-gray-300 rounded w-full"
                                        />
                                    </div>
                                </div>
                                {/* {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )} */}
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="font-bold text-2xl absolute -top-10 left-[110px]"
                                    >
                                        ReferenceId
                                    </label>
                                    <input
                                        type="text"
                                        id="referenceId"
                                        name="referenceId"
                                        value={referenceId}
                                        onChange={(e) =>
                                            setReferenceId(e.target.value)
                                        }
                                        required
                                        // className="p-2 border border-gray-300 rounded w-full"
                                    />
                                </div>
                                {error && (
                                    <p className="text-red-500">{error}</p>
                                )}
                                <div className="sub-login-mid">
                                    <p>
                                        {/* <a href="#">Đăng kí</a> */}
                                        <Link to="/register">Đăng kí</Link>
                                    </p>
                                    <p>
                                        <a href="#">Quên mật khẩu?</a>
                                    </p>
                                </div>
                            </div>
                            <div className="login-bot">
                                <button
                                    type="submit"
                                    className="text-[20px] bg-blue-500 text-white p-4 rounded"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Đang đăng nhập..."
                                        : "Đăng nhập"}
                                </button>
                            </div>
                        </form>
                        <div className="another-login">
                            <div className="mxh">
                                <a href="" className="primary-btn">
                                    <i
                                        className="fab fa-facebook-square"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a href="" className="primary-btn">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END LOGIN --> */}
        </div>
    );
};

export default Login;
