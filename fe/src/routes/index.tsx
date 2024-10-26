import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Login/Login";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "@/layouts/AdminLayout";
import DashboardPage from "@/pages/Admin/Dashboard";
import ProductList from "@/pages/Admin/Tours/ProductList";
import AddOrEditProduct from "@/pages/Admin/Tours/AddOrEditProduct";
import ProductDetail from "@/pages/Admin/Tours/ProductDetail";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {/* <Route index element={< />} /> */}
          <Route path="signin" element={<Login />} />
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
