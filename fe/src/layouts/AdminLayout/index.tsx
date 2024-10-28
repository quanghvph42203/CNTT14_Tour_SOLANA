// src/layouts/AdminLayout.js
import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Navigate, Outlet } from "react-router-dom"; // Import Outlet
import {
  DashboardOutlined,
  UserOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Content, Footer, Sider } = Layout;
const role = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string).role
  : null;
const LayoutAdmin = () => {
  return (
    <>
      {role !== "admin" ? (
        <>
          <Navigate to="/login" />
        </>
      ) : (
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
                  Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  Quản lý khách hàng
                </Menu.Item>
                <Menu.Item key="3" icon={<ProfileOutlined />}>
                  <Link to={`products`}>Quản lý tour</Link>
                </Menu.Item>
              </Menu>
            </Sider>

            <Layout className="site-layout">
              <Header
                style={{
                  background: "#fff",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                <h1>Trang quản trị - Quản lý tour du lịch</h1>
              </Header>
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
      )}
    </>
  );
};

export default LayoutAdmin;
