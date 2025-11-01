// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        // Lấy 2 sản phẩm đầu tiên làm "nổi bật"
        const response = await axiosClient.get<Product[]>('/products?_limit=2');
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm nổi bật:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="space-y-12">
      {/* 1. Hero Section (Banner) */}
      <section className="bg-green-600 text-white rounded-lg p-12 md:p-20 text-center shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chào mừng đến với DUNIX8
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Giải pháp giặt xả, tẩy rửa an toàn cho gia đình bạn.
        </p>
        <Link 
          to="/nuoc-giat" 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
        >
          Khám phá Sản phẩm
        </Link>
      </section>

      {/* 2. Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Sản phẩm Nổi bật
        </h2>
        
        {loading && <div className="text-center">Đang tải sản phẩm...</div>}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;