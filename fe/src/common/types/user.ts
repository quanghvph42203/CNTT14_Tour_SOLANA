
export type IUser = {
    _id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "user" | "admin";
    avatar: string;
};
