// import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Login/Login";
import DetailUser from "@/pages/admin/User/DetailUser";
import EditUser from "@/pages/admin/User/EditUser";
import Users from "@/pages/admin/User/Users";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}/>
          <Route path="/users/:id" element={<DetailUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="signin" element={<Login />} />
        
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
