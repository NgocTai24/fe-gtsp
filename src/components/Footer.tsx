// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2025 SảnPhẩmXanh. Mọi quyền được bảo lưu.</p>
        <p className="mt-2">Một sản phẩm demo được xây dựng với React, Node.js và Tình yêu.</p>
      </div>
    </footer>
  );
};

export default Footer;