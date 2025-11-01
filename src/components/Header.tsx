// src/components/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  // Hàm style cho NavLink
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-white bg-blue-700 px-3 py-2 rounded-md font-medium'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium';

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            SảnPhẩmXanh
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <NavLink to="/" className={getNavLinkClass} end>
              Trang chủ
            </NavLink>
            <NavLink to="/products" className={getNavLinkClass}>
              Sản phẩm
            </NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>
              Liên hệ
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;