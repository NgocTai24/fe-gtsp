import React, { useState, useEffect } from 'react';
// 1. Import useNavigate
import { useParams, Link, useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); 
  // 2. Khởi tạo useNavigate
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return; // Nếu không có slug thì không làm gì

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        // 2. Gọi API để lấy sản phẩm có slug tương ứng
        // json-server hỗ trợ tìm kiếm: /products?slug=ten-slug
        const response = await axiosClient.get<Product[]>(`/products?slug=${slug}`);
        
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]); // json-server trả về 1 mảng
        } else {
          setError('Không tìm thấy sản phẩm.');
        }
      } catch (err) {
        setError('Lỗi khi tải dữ liệu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]); // 3. useEffect sẽ chạy lại mỗi khi "slug" thay đổi

  // 3. Tạo hàm xử lý quay lại trang trước
  const handleGoBack = () => {
    navigate(-1); // -1 có nghĩa là quay lại trang trước đó trong lịch sử trình duyệt
  };

  // 4. Render các trạng thái
  if (loading) {
    return <div className="text-center p-10">Đang tải chi tiết sản phẩm...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-10 text-red-500">
        <p>{error}</p>
        {/* 4. Sửa Link thành Button và dùng navigate */}
        <button
          onClick={handleGoBack}
          className="text-green-600 hover:underline"
        >
          &larr; Quay lại
        </button>
      </div>
    );
  }

  if (!product) {
    // Trường hợp này gần như không xảy ra nếu error đã xử lý
    return <div>Không có sản phẩm.</div>;
  }

  // 5. Render chi tiết sản phẩm
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {/* 5. Sửa Link thành Button và dùng navigate */}
        <button
          onClick={handleGoBack}
          className="text-green-600 hover:underline"
        >
          &larr; Quay lại danh sách
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cột hình ảnh */}
        <div className="md:w-1/2">
          <img 
            src={product.main_image} 
            alt={product.name}
            className="w-full rounded-lg shadow-lg object-cover" // Thêm object-cover để ảnh không bị méo
          />
        </div>

        {/* Cột thông tin */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6 italic">
            {product.description}
          </p>
          
          {/* Dùng "content" để hiển thị chi tiết */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-2">Chi tiết sản phẩm</h2>
            {/* Hiển thị nội dung, xử lý xuống dòng (nếu có) */}
            <p style={{ whiteSpace: 'pre-line' }}>
              {product.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
