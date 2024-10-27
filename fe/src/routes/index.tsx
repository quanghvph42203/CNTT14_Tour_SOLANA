
import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Auth/Login";
import Register from "@/pages/(website)/Auth/Register";
import DashboardPage from "@/pages/DashboardPage";
import { Route, Routes } from "react-router-dom";
// import ProductList from "@/pages/Admin/Tours/ProductList";
// import AddOrEditProduct from "@/pages/Admin/Tours/AddOrEditProduct";
// import ProductDetail from "@/pages/Admin/Tours/ProductDetail";
import LayoutAdmin from "@/layouts/AdminLayout";
import ProductList from "@/pages/admin/Tours/ProductList";
import AddOrEditProduct from "@/pages/admin/Tours/AddOrEditProduct";
import ProductDetail from "@/pages/admin/Tours/ProductDetail";
import DetailUser from "@/pages/admin/User/DetailUser";
import EditUser from "@/pages/admin/User/EditUser";
import Users from "@/pages/admin/User";
// import LayoutAdmin from "@/layouts/AdminLayout";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    {/* <Route index element={< />} /> */}
                </Route>{" "}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<AddOrEditProduct />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route
                        path="products/:id/edit"
                        element={<AddOrEditProduct />}
                    />
                    <Route path="users" element={<Users />} />
                    <Route path="users/:id" element={<DetailUser />} />
                    <Route path="users/:id/edit" element={<EditUser />} />
                </Route>
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </>
    );

};

export default Router;
