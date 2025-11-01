// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../types'; // Import type chung
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/products/${product.slug}`}>
        <img 
          src={product.main_image} 
          alt={product.name} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold truncate" title={product.name}>
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="text-right mt-4">
            <span className="text-blue-600 font-medium hover:underline">
              Xem chi tiết
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;