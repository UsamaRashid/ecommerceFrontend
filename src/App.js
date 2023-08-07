import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ViewCart from "./pages/ViewCart";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<ViewCart />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};

export default App;
