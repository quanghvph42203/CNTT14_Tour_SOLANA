
import React from "react";
import Banner from "./_components/Banner";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Outlet } from "react-router-dom";


const index = () => {
  return (
    <div>
      <Header />

      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default index;

