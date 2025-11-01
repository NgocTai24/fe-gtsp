// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // <-- IMPORT MỚI
import Footer from '../components/Footer'; // <-- IMPORT MỚI

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <Outlet /> {/* NỘI DUNG TRANG SẼ HIỆN Ở ĐÂY */}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;