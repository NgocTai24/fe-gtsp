import React from 'react';
import { Product } from '../types'; // Import type chung
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <Link to={`/products/${product.slug}`} className="flex flex-col h-full">
        
        {/*
          === THAY ĐỔI Ở ĐÂY ===
          1. Đổi h-48 (192px) thành h-80 (320px) để cho ảnh dọc có thêm không gian.
          2. Đổi 'object-cover' (cắt) thành 'object-contain' (hiển thị toàn bộ).
          3. Thêm 'bg-gray-100' để lấp đầy khoảng trống hai bên ảnh (nếu có).
        */}
        <div className="w-full h-80 bg-gray-100 overflow-hidden">
          <img 
            src={product.main_image} 
            alt={product.name} 
            className="w-full h-full object-contain" 
          />
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold truncate" title={product.name}>
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          {/* Đẩy "Xem chi tiết" xuống cuối card */}
          <div className="text-right mt-auto pt-4"> 
            <span className="text-green-600 font-medium hover:underline">
              Xem chi tiết
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
