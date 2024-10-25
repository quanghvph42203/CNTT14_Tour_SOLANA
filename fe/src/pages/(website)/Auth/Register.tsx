import { IUser } from "@/common/types/user";
import instance from "@/configs/axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import { RegisterValidationSchema } from "@/common/validations/auth";
import { toast } from "react-toastify";
import "../../../styles/register.css";
type Props = {};

const Register = (props: Props) => {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        resolver: joiResolver(RegisterValidationSchema),
    });
    const handleOnSubmit = async (data: IUser) => {
        try {
            // console.log(data);
            await instance.post("/auth/signup", data);
            toast.success("Register successfully");
            nav("/login");
        } catch (error) {
            console.log(error);
            toast.success(error as string);
        }
    };
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        //         <form
        //             className="space-y-4"
        //             onSubmit={handleSubmit(handleOnSubmit)}
        //         >
        //             <h2 className="text-2xl font-bold text-center text-gray-800">
        //                 Register
        //             </h2>
        //             <div className="space-y-2">
        //                 <label
        //                     htmlFor="username"
        //                     className="block text-sm font-medium text-gray-700"
        //                 >
        //                     Username
        //                 </label>
        //                 <input
        //                     type="text"
        //                     id="username"
        //                     placeholder="Enter your username"
        //                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                     {...register("name", { required: true })}
        //                 />
        //                 {errors.name && (
        //                     <p className="text-red-500">
        //                         {errors.name.message}
        //                     </p>
        //                 )}
        //             </div>
        //             <div className="space-y-2">
        //                 <label
        //                     htmlFor="username"
        //                     className="block text-sm font-medium text-gray-700"
        //                 >
        //                     Email
        //                 </label>
        //                 <input
        //                     type="email"
        //                     id="username"
        //                     placeholder="Enter your email"
        //                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                     {...register("email", { required: true })}
        //                 />
        //                 {errors.email && (
        //                     <p className="text-red-500">
        //                         {errors.email.message}
        //                     </p>
        //                 )}
        //             </div>
        //             <div className="space-y-2">
        //                 <label
        //                     htmlFor="password"
        //                     className="block text-sm font-medium text-gray-700"
        //                 >
        //                     Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     id="password"
        //                     placeholder="Enter your password"
        //                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                     {...register("password", { required: true })}
        //                 />
        //                 {errors.password && (
        //                     <p className="text-red-500">
        //                         {errors.password.message}
        //                     </p>
        //                 )}
        //             </div>
        //             <div className="space-y-2">
        //                 <label
        //                     htmlFor="confirm-password"
        //                     className="block text-sm font-medium text-gray-700"
        //                 >
        //                     Confirm Password
        //                 </label>
        //                 <input
        //                     type="password"
        //                     id="confirm-password"
        //                     placeholder="Re-enter your password"
        //                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                     {...register("confirmPassword", {
        //                         required: true,
        //                     })}
        //                 />
        //                 {errors.confirmPassword && (
        //                     <p className="text-red-500">
        //                         {errors.confirmPassword.message}
        //                     </p>
        //                 )}
        //             </div>
        //             <button
        //                 type="submit"
        //                 className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        //             >
        //                 Register
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <div id="main">
            {/* <!-- LOGIN --> */}
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
                        <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
                            <div className="register-mid">
                                <input
                                    type="text"
                                    placeholder="Họ Và Tên "
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                                <input
                                    type="text"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                                <input
                                    placeholder="Mật khẩu"
                                    type="password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                                <input
                                    placeholder="Nhập Lại Mật khẩu"
                                    type="password"
                                    {...register("confirmPassword")}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                                {/* <div className="sub-register-mid">
                                    <p></p>
                                    <p>
                                        <a href="#">Quên mật khẩu?</a>
                                    </p>
                                </div> */}
                            </div>
                            <div className="register-bot">
                                <input type="submit" value="Đăng Kí" />
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
