import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBlog } from "@/interfaces/Blog"; 
import instance from "@/configs/axios";
import "../../../styles/blogList.css"; 

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await instance.get("/blogs");
        console.log("API Response:", response.data);

        const data = Array.isArray(response.data) ? response.data : [];
        setBlogs(data);
      } catch (err: any) {
        console.error("Error fetching blogs:", err);
        setError(err.message || "Lỗi khi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="blog-list-container">
      <header className="blog-header">
        <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
        <span className="line gold" />
        <h2 className="t-content">
          NƠI ĐÂY SẼ CẬP NHẬT <span className="highlight">BLOG</span> MỖI NGÀY
        </h2>
        <h5 className="t-black bot-content">ĐÓN CHỜ CÁC TIN TỨC TỪ NHỮNG ĐỊA ĐIỂM DU LỊCH</h5>
      </header>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
          <img className="blog-image" src={blog.bannerImage} alt={blog.title} />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <Link className="blog-button" to={`/blog/${blog._id}`}>
              CHI TIẾT
            </Link>
          </div>
        </div>        
        ))}
      </div>
    </div>
  );
};

export default BlogList;
