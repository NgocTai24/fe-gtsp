import React from 'react';
import { Link } from 'react-router-dom';
// Import các icon
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube } from 'react-icons/fa';
// Bạn cũng có thể thêm icon Zalo nếu có

const Footer: React.FC = () => {
  return (
    // THAY ĐỔI 1: Chuyển sang nền Xanh lá đậm
    <footer className="bg-green-800 text-green-100 mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Bố cục lưới 4 cột, tự động xuống hàng trên di động */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* --- CỘT 1: LOGO VÀ GIỚI THIỆU --- */}
          <div>
            <Link to="/" className="inline-block mb-4">
              {/* Giữ logo, nên dùng bản logo màu trắng trên nền tối */}
              <img src="/images/logo.jpg" alt="DUNIX8 Logo" className="h-14" />
            </Link>
            <p className="text-sm">
              DUNIX8 tự hào mang đến các giải pháp giặt xả, tẩy rửa an toàn,
              lành tính và hiệu quả, bảo vệ sức khỏe gia đình Việt.
            </p>
          </div>

          {/* --- CỘT 2: ĐIỀU HƯỚNG --- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Về Công Ty</h3>
            <ul className="space-y-2">
              {/* THAY ĐỔI 2: Đổi màu hover của link */}
              <li><Link to="/gioi-thieu" className="hover:text-white transition-colors">Giới Thiệu</Link></li>
              <li><Link to="/tin-uc" className="hover:text-white transition-colors">Tin Tức</Link></li>
              <li><Link to="/tuyen-dung" className="hover:text-white transition-colors">Tuyển Dụng</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          {/* --- CỘT 3: SẢN PHẨM --- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sản Phẩm</h3>
            <ul className="space-y-2">
              <li><Link to="/nuoc-giat" className="hover:text-white transition-colors">Nước Giặt</Link></li>
              <li><Link to="/nuoc-rua-bat" className="hover:text-white transition-colors">Nước Rửa Bát</Link></li>
              <li><Link to="/nuoc-lau-san" className="hover:text-white transition-colors">Nước Lau Sàn</Link></li>
            </ul>
          </div>

          {/* --- CỘT 4: THÔNG TIN LIÊN HỆ --- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên Hệ Với Chúng Tôi</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                {/* THAY ĐỔI 3: Đổi màu icon */}
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-green-300" />
                <span>Thôn Tân Luật, [Xã Công Chính], Tỉnh Thanh Hóa</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 flex-shrink-0 text-green-300" />
                <a href="tel:0367399136" className="hover:text-white transition-colors">0367.399.136</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 flex-shrink-0 text-green-300" />
                <a href="mailto:info@dunix8.com" className="hover:text-white transition-colors">info@dunix8.com</a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" target="_blank" rel="noreferrer" className="text-green-100 hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-green-100 hover:text-white transition-colors">
                <FaYoutube className="w-6 h-6" />
              </a>
              {/* Thêm icon Zalo, Tiktok... nếu có */}
            </div>
          </div>

        </div>
      </div>

      {/* --- THANH COPYRIGHT (SUB-FOOTER) --- */}
      {/* THAY ĐỔI 4: Chuyển sang nền xanh lá đậm hơn nữa */}
      <div className="bg-green-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-green-300">
          <p>&copy; 2025 Bản quyền thuộc về Công ty TNHH DUNIX8. Đã đăng ký Bản quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

