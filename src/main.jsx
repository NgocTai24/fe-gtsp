// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'

import GioiThieuPage from './pages/GioiThieuPage'
import TinTucPage from './pages/TinTucPage'
import TuyenDungPage from './pages/TuyenDungPage'
import CategoryPage from './pages/CategoryPage' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      
      { path: '/products/:slug', element: <ProductDetailPage /> }, 

      // THÊM CÁC ROUTE TĨNH
      { path: '/gioi-thieu', element: <GioiThieuPage /> },
      { path: '/tin-tuc', element: <TinTucPage /> },
      { path: '/tuyen-dung', element: <TuyenDungPage /> },

      // THÊM CÁC ROUTE DANH MỤC (DÙNG CHUNG 1 COMPONENT)
      { 
        path: '/nuoc-giat', 
        element: <CategoryPage categorySlug="nuoc-giat" pageTitle="Nước Giặt" /> 
      },
      { 
        path: '/nuoc-rua-bat', 
        element: <CategoryPage categorySlug="nuoc-rua-chen" pageTitle="Nước Rửa Bát" /> 
      },
      { 
        path: '/nuoc-lau-san', 
        element: <CategoryPage categorySlug="nuoc-lau-san" pageTitle="Nước Lau Sàn" /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)