import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/register.css";
import Swal from "sweetalert2";

const Register = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [referenceId, setReferenceId] = useState("");
    const [externalWalletAddress, setExternalWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const url = "https://api.gameshift.dev/nx/users";
        const headers = {
            accept: "application/json",
            "content-type": "application/json",
            "x-api-key":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyNDgzYjllOC1kYTM2LTQ4YmYtYjU5NC0yN2U3MTY3Yjg3ZjIiLCJzdWIiOiJmMGJjM2Y5OC01MDAwLTQyMmYtODM4ZS1lMzQxYTcxOTliMDIiLCJpYXQiOjE3MzMyODM5NjB9.LdM4pDuynJgagVnHcVL3Y_3Lg7mDGxa8xfGljbN3dpo",
        };
        const body = {
            email,
            referenceId,
            externalWalletAddress,
        };

        try {
            const response = await axios.post(url, body, { headers });
            console.log(response.data);
            Swal.fire({
                title: "Good job!",
                text: "Đăng Kí Thành Công",
                icon: "success",
            });
            setTimeout(() => {
                nav("/login");
            }, 2000);
        } catch (err) {
            console.error(err);
            setError("Đăng ký thất bại. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="main">
            {/* <!-- Register --> */}
            <div id="register">
                <div className="register-banner">
                    <div className="uiregister ">
                        <div className="register-top ">
                            <img
                                src="../../../../public/img/GoodTrip5.png"
                                alt="Logonav"
                                style={{ marginLeft: "250px" }}
                            />
                            <h1>
                                ĐĂNG Kí VÀO
                                <span
                                    style={{
                                        color: "#06aa2a",
                                        marginLeft: "3px",
                                    }}
                                >
                                    GOODTRIP
                                </span>
                            </h1>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="register-mid">
                                {/*  email*/}
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
                                {/* referenceId */}
                                <div className="mb-[40px]">
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
                                </div>
                                {/* externalWalletAddress */}
                                <div className="mb-[40px]">
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="font-bold text-2xl absolute -top-10 left-[110px]"
                                        >
                                            ExternalWalletAddress
                                        </label>
                                        <input
                                            type="text"
                                            id="externalWalletAddress"
                                            name="externalWalletAddress"
                                            value={externalWalletAddress}
                                            onChange={(e) =>
                                                setExternalWalletAddress(
                                                    e.target.value
                                                )
                                            }
                                            required
                                            // className="p-2 border border-gray-300 rounded w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="register-bot">
                                <button
                                    type="submit"
                                    className="text-[20px] bg-red-500 text-white p-4 rounded"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Đang đăng ký..."
                                        : "Đăng ký người dùng"}
                                </button>
                            </div>
                        </form>
                        <div className="another-register">
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
            {/* <!-- END register --> */}
        </div>
    );
};

export default Register;
