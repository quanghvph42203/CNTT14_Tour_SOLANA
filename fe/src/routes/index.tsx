import WebsiteLayout from "@/layouts/WebsiteLayout";
import Login from "@/pages/(website)/Auth/Login";
import Register from "@/pages/(website)/Auth/Register";
import { Route, Routes } from "react-router-dom";
// import ProductList from "@/pages/Admin/Tours/ProductList";
// import AddOrEditProduct from "@/pages/Admin/Tours/AddOrEditProduct";
// import ProductDetail from "@/pages/Admin/Tours/ProductDetail";
import LayoutAdmin from "@/layouts/AdminLayout";
import ProductList from "@/pages/admin/Tours/ProductList";
import Users from "@/pages/admin/User";
import HomePage from "@/pages/(website)/Home";
import Blog from "@/pages/(website)/Blog";
import Contact from "@/pages/(website)/Contact";
import Sapa from "@/pages/(website)/Home/Sapa";
import Dalat from "@/pages/(website)/Home/Dalat";
import Vungtau from "@/pages/(website)/Home/Vungtau";
import Cantho from "@/pages/(website)/Home/Cantho";
import Blogsapa from "@/pages/(website)/Blog/Blogpage/Blogsapa";
import Blogdalat from "@/pages/(website)/Blog/Blogpage/Blogdalat";
import Blogvungtau from "@/pages/(website)/Blog/Blogpage/Blogvungtau";
import Blogcantho from "@/pages/(website)/Blog/Blogpage/Blogcantho";
import DetailTour from "@/pages/(website)/Home/DetailTour";
import PayTour from "@/pages/(website)/payTour/PayTour";
import TourList from "@/pages/(website)/Tour/TourList";
import DashboardPage from "@/pages/admin/Tours/DashboardPage";
import AddOrEditProduct from "@/pages/admin/Tours/component/AddOrEditProduct";
import ProductDetail from "@/pages/admin/Tours/component/ProductDetail";
// import LayoutAdmin from "@/layouts/AdminLayout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail-tour/:id" element={<DetailTour />} />
          <Route path="/sapa" element={<Sapa />} />
          <Route path="/dalat" element={<Dalat />} />
          <Route path="/vungtau" element={<Vungtau />} />
          <Route path="/cantho" element={<Cantho />} />
          <Route path="/tour" element={<TourList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsapa" element={<Blogsapa />} />
          <Route path="/blogdalat" element={<Blogdalat />} />
          <Route path="/blogvungtau" element={<Blogvungtau />} />
          <Route path="/blogcantho" element={<Blogcantho />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payTour/:id" element={<PayTour />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddOrEditProduct />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/:id/edit" element={<AddOrEditProduct />} />
          <Route path="users" element={<Users />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

export default Router;
