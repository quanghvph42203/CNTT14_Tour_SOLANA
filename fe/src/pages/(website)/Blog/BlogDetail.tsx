import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBlog } from "@/interfaces/Blog";
import instance from "@/configs/axios";
import "../../../styles/blogDetail.css"; 

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await instance.get(`/blogs/${id}`);
        console.log("Blog Detail:", response.data);
        setBlog(response.data);
      } catch (err: any) {
        console.error("Error fetching blog detail:", err);
        setError(err.message || "Lỗi khi tải bài viết");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Đang tải bài viết...</p>
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

  if (!blog) {
    return (
      <div className="error-container">
        <p>Không tìm thấy bài viết.</p>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <div className="text-detail-center-container">
        <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
          <span className="detail-line" />
            <h2 className="t-content">
              NƠI ĐÂY SẼ CẬP NHẬT <span className="highlight">BLOG</span> MỖI NGÀY
            </h2>
          <h5 className="t-black bot-content">ĐÓN CHỜ CÁC TIN TỨC TỪ NHỮNG ĐỊA ĐIỂM DU LỊCH</h5>
      </div>
      <div className="blog-detail-header">
        <h1>{blog.title}</h1>
        {blog.bannerImage && (
          <div className="blog-detail-banner">
            <img src={blog.bannerImage} alt="Banner" className="blog-detail-banner-image" />
          </div>
        )}
        <p className="blog-detail-description">{blog.description}</p>
      </div>

      <div className="blog-detail-content">
        {blog.sections.map((section, index) => (
          <section key={index} className="blog-detail-section">
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
            {section.images.map((image, imageIndex) => (
              <div key={imageIndex} className="blog-detail-section-image">
                <img src={image.url} alt={image.caption || "Image"} className="section-image" />
                {image.caption && <p className="image-caption">{image.caption}</p>}
              </div>
            ))}
          </section>
        ))}
      </div>

      <div className="blog-detail-recommendations">
        <h3>Khám phá thêm</h3>
        <ul>
          {blog.recommendations.map((recommendation, index) => (
            <li key={index}>
              <a href={`/blogs/${recommendation}`}>{recommendation}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-detail-navigation">
        <button className="back-button">
          <a href="/blog">Quay lại</a>
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
