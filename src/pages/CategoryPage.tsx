// src/pages/CategoryPage.tsx
import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  categorySlug: string;
  pageTitle: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug, pageTitle }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Tìm category dựa trên slug để lấy ID
        const catResponse = await axiosClient.get(`/categories?slug=${categorySlug}`);

        if (!catResponse.data || catResponse.data.length === 0) {
          throw new Error('Không tìm thấy danh mục.');
        }

        const categoryId = catResponse.data[0].id;

        // 2. Lấy tất cả sản phẩm thuộc category ID đó
        const prodResponse = await axiosClient.get<Product[]>(`/products?category_id=${categoryId}`);
        setProducts(prodResponse.data);

      } catch (err) {
        console.error(err);
        setError('Không thể tải sản phẩm cho danh mục này.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categorySlug]); // Chạy lại khi categorySlug thay đổi

  if (loading) return <div>Đang tải sản phẩm...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>

      {products.length === 0 ? (
        <p>Chưa có sản phẩm nào trong danh mục này.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;