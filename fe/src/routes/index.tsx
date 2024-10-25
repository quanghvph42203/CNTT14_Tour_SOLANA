import LayoutAdmin from "@/layouts/AdminLayout/LayoutAdmin";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Auth/Login";
import Register from "@/pages/(website)/Auth/Register";
import DashboardPage from "@/pages/DashboardPage";
import ProductsManagementPage from "@/pages/ProductsManagementPage";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    {/* <Route index element={< />} /> */}
                    <Route path="/signin" element={<Login />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route
                        path="/admin/products"
                        element={<ProductsManagementPage />}
                    />
                </Route>
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </>
    );
};

export default Router;
