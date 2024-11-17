// // controllers/emailController.js
// import  nodemailer  from "nodemailer";
// import Email from "../models/sendmail"

// export const sendEmail = async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Cấu hình tài khoản email của admin để gửi mail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "haquang04@gmail.com", // Đổi thành email admin của bạn
//         pass: "Quang2004", // Đổi thành mật khẩu email của bạn
//       },
//     });

//     // Cấu hình nội dung email
//     const mailOptions = {
//       from: email,
//       to: "haquang04@gmail.com", // Email của admin nhận
//       subject: "Khách hàng để lại email",
//       text: `Khách hàng: ${email} đã để lại email.`,
//     };

//     // Gửi email
//     await transporter.sendMail(mailOptions);

//     // Lưu email vào cơ sở dữ liệu nếu cần
//     const newEmail = new Email({ email });
//     await newEmail.save();

//     res.status(200).json({ message: "Email đã được gửi thành công!" });
//   } catch (error) {
//     console.error("Lỗi khi gửi email:", error);
//     res.status(500).json({ message: "Lỗi khi gửi email!" });
//   }
// };
