import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Login/Login";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {/* <Route index element={< />} /> */}
          <Route path="signin" element={<Login />} />
        </Route>
        {/* <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="products" element={<ProductsManagementPage />} />
                    <Route path="products/add" element={<ProductAddPage />} />
                    <Route path="products/:id/edit" element={<ProductEditPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
