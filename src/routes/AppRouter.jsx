import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from '../components/ToastContext.jsx';

import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Cart from '../pages/Cart.jsx';
import NotFound from '../pages/NotFound.jsx';
import ProductDetails from '../components/ProductDetails.jsx';

export default function AppRouter() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ToastProvider>
  )
}
