import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HelpCenter from "./pages/HelpCenter";
import NotFount from "./pages/NotFount";
import OrderTracking from "./pages/OrderTracking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductLists from "./pages/ProductsLists";
import ErrorBoundary from "./components/Error";
import Footer from "./components/Footer";
import CartPage from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import { HeaderNav } from "./components/HeaderNav";

const App = () => {
  return (
    <div className="">
      <div className="">
        <HeaderNav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/" element={<ProductLists />} />
        <Route path="/products" element={<ProductLists />} />
        {/* <Route path='products/:id' element{<Pro} */}
        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<NotFount />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
