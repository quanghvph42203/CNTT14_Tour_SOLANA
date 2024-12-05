// src/layouts/AdminLayout.js
import {
  DashboardOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, message } from "antd";
import "antd/dist/reset.css";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Navigate, Outlet } from "react-router-dom";
import Header from "../WebsiteLayout/_components/Header";

const LayoutAdmin = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (!user || user.referenceId !== "người dùng 1111") {
    message.error("Bạn không phải admin, không có quyền vào trang này.");
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div
            className="logo"
            style={{
              height: "32px",
              margin: "16px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>Admin</h2>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to={`/admin`}> Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to={`users`}> Quản lý người dùng</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>
              <Link to={`products`}> Quản lý tour</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<ProfileOutlined />}>
              <Link to={`/`}> Về Trang Chủ</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Travel Admin ©2024 Created by YourCompany
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
