import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Auth/Login";
import Register from "@/pages/(website)/Auth/Register";
import { Route, Routes } from "react-router-dom";
import ProductList from "@/pages/Admin/Tours/ProductList";
import LayoutAdmin from "@/layouts/AdminLayout";
import AddOrEditProduct from "@/pages/Admin/Tours/component/AddOrEditProduct";
import ProductDetail from "@/pages/Admin/Tours/component/ProductDetail";
import DashboardPage from "@/pages/Admin/Tours/DashboardPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {/* <Route index element={< />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddOrEditProduct />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/:id/edit" element={<AddOrEditProduct />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
