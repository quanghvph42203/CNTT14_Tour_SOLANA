import Joi from "joi";

export const RegisterValidationSchema = Joi.object({
    name: Joi.string().required().min(3).max(30).messages({
        "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Name không được với quá {#limit} ký tự",
    }),
    email: Joi.string().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được sé trống",
    }),
    password: Joi.string().required().min(6).max(30).messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password là bắt buộc",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được với quá {#limit} ký tự",
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
        "any.only": "Mật khẩu không trùng khớp",
    }),
});
export const LoginValidationSchema = Joi.object({
    email: Joi.string().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được sé trống",
    }),
    password: Joi.string().required().min(6).max(30).messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password là bắt buộc",
        "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Password không được với quá {#limit} ký tự",
    }),
});
