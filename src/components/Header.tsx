import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// Thêm icon FaBars (Hamburger) và FaTimes (dấu X)
import { FaSearch, FaPhoneAlt, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  // 1. Thêm State để quản lý việc Bật/Tắt menu di động
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hàm style cho NavLink ở thanh nav-bar XANH (Desktop)
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-white border-b-2 border-white px-3 py-2 font-medium'
      : 'text-white hover:text-gray-200 px-3 py-2 font-medium';

  // Hàm style cho NavLink TRONG menu di động (dropdown)
  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'block py-2 px-4 text-sm bg-green-700 text-white rounded-md'
      : 'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md';

  return (
    // Thêm sticky top-0 z-50 để Header luôn dính ở trên khi cuộn
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* ===== TOP BAR ===== */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.jpg" alt="DUNIX8 Logo" className="h-16" />
          </Link>

          {/* 2. Search Bar (Ẩn trên mobile và tablet) */}
          <div className="flex-1 max-w-xl mx-8 hidden lg:flex">
            <input
              type="text"
              placeholder="Nhập sản phẩm cần tìm..."
              // Sửa focus-ring thành màu xanh lá
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* Sửa hover button thành màu xanh lá */}
            <button className="bg-green-600 text-white px-5 py-2 rounded-r-md hover:bg-green-700">
              <FaSearch />
            </button>
          </div>

          {/* 3. Info & Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            
            {/* SĐT (Ẩn hoàn toàn trên mobile để tiết kiệm không gian) */}
            <div className="hidden md:flex items-center space-x-2">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <div>
                {/* Sửa text-black-500 thành text-gray-500 */}
                <span className="text-black-500 text-sm">Tư vấn & Hỗ trợ</span>
                <p className="text-green-600 font-bold">0367.399.136</p>
              </div>
            </div>
            
            {/* Icons (Thêm lại icon Giỏ hàng) */}
            <FaUser className="text-gray-600 text-2xl hover:text-green-600 cursor-pointer" />
            <FaShoppingCart className="text-gray-600 text-2xl hover:text-green-600 cursor-pointer" />
            
            {/* 4. NÚT HAMBURGER (CHỈ HIỆN TRÊN DI ĐỘNG/TABLET) */}
            <button
              className="text-gray-600 text-2xl md:hidden" // 'md:hidden' -> ẩn trên desktop
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Bấm để Bật/Tắt menu
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM NAVIGATION BAR (ẨN TRÊN DI ĐỘNG/TABLET) ===== */}
      <nav className="bg-green-600 hidden md:flex"> {/* 'hidden md:flex' -> Ẩn trên mobile, hiện trên desktop */}
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
            <NavLink to="/tuyen-dung" className={getNavLinkClass}>
              Tuyển Dụng
            </NavLink>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU (HIỆN KHI CLICK NÚT HAMBURGER) ===== */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="p-4 space-y-2">
          {/* Thêm thanh tìm kiếm cho di động */}
          <div className="flex mb-4">
            <input type="text" placeholder="Tìm kiếm..." className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>

          {/* Các link menu (khi bấm vào sẽ tự đóng menu) */}
          <NavLink to="/" className={getMobileNavLinkClass} end onClick={() => setIsMobileMenuOpen(false)}>
            Trang Chủ
          </NavLink>
          <NavLink to="/gioi-thieu" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Giới Thiệu
          </NavLink>
          <NavLink to="/nuoc-giat" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Nước Giặt
          </NavLink>
          <NavLink to="/nuoc-rua-bat" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Nước Rửa Bát
          </NavLink>
          <NavLink to="/nuoc-lau-san" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Nước Lau Sàn
          </NavLink>
          <NavLink to="/tin-tuc" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Tin Tức
          </NavLink>
          <NavLink to="/contact" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Liên Hệ
          </NavLink>
          <NavLink to="/tuyen-dung" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Tuyển Dụng
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
