import { IUser } from "@/common/types/user";
import { LoginValidationSchema } from "@/common/validations/auth";
import instance from "@/configs/axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../styles/login.css";
type Props = {};

const Login = (props: Props) => {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({
        resolver: joiResolver(LoginValidationSchema),
    });
    const handleOnSubmit = async (data: IUser) => {
        try {
            // console.log(data);
            const result = await instance.post("/auth/signin", data);
            // console.log(result.data.user);
            localStorage.setItem("accessToken", result.data.accessToken);
            localStorage.setItem("user", JSON.stringify(result.data.user));
            toast.success("Login successfully");
            nav("/");
        } catch (error) {
            console.log(error);
            toast.success(error as string);
        }
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
                        <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
                            <div className="login-mid">
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
                                <input type="submit" value="Đăng nhập" />
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
