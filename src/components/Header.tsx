// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaPhoneAlt, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  // Hàm style cho NavLink ở thanh nav-bar XANH
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-white border-b-2 border-white px-3 py-2 font-medium'
      : 'text-white hover:text-gray-200 px-3 py-2 font-medium';

  return (
    <header className="bg-white shadow-md">
      {/* ===== TOP BAR ===== */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.jpg" alt="SảnPhẩmXanh Logo" className="h-14" />
          </Link>

          {/* 2. Search Bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:flex">
            <input
              type="text"
              placeholder="Nhập sản phẩm cần tìm..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-600 text-white px-5 py-2 rounded-r-md hover:bg-blue-700">
              <FaSearch />
            </button>
          </div>

          {/* 3. Info & Actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <div>
                <span className="text-black-500 text-sm">Tư vấn & Hỗ trợ</span>
                <p className="text-green-600 font-bold">0367399136 </p>
              </div>
            </div>
            
            <FaUser className="text-green-600 text-2xl hover:text-blue-600 cursor-pointer" />
          </div>

        </div>
      </div>

      {/* ===== BOTTOM NAVIGATION BAR ===== */}
      <nav className="bg-green-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-12 space-x-6">
            <NavLink to="/" className={getNavLinkClass} end>
              Trang Chủ
            </NavLink>
            <NavLink to="/gioi-thieu" className={getNavLinkClass}>
              Giới Thiệu
            </NavLink>
            <NavLink to="/nuoc-giat" className={getNavLinkClass}>
              Nước Giặt
            </NavLink>
            <NavLink to="/nuoc-rua-bat" className={getNavLinkClass}>
              Nước Rửa Bát
            </NavLink>
            <NavLink to="/nuoc-lau-san" className={getNavLinkClass}>
              Nước Lau Sàn
            </NavLink>
            <NavLink to="/tin-tuc" className={getNavLinkClass}>
              Tin Tức
            </NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>
              Liên Hệ
            </NavLink>
            {/* Link "Tuyển dụng" bạn yêu cầu thêm, không có trong ảnh */}
            <NavLink to="/tuyen-dung" className={getNavLinkClass}>
              Tuyển Dụng
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;