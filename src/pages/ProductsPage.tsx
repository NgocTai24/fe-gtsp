// src/pages/ProductsPage.tsx
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { Product } from '../types'; // Đảm bảo bạn đã import từ file chung
import ProductCard from '../components/ProductCard'; // <-- IMPORT MỚI

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get<Product[]>('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách Sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* THAY THẾ BẰNG COMPONENT MỚI */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;