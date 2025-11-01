// src/pages/TuyenDungPage.tsx
import React from 'react';
import { FaCheckCircle, FaStar, FaUserCheck, FaPhoneAlt } from 'react-icons/fa';

const TuyenDungPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* --- TIÊU ĐỀ CHÍNH --- */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Cơ Hội Nghề Nghiệp Cùng DUNIX8
        </h1>
        <p className="text-lg text-gray-600">
          Công ty TNHH DUNIX8 đang tìm kiếm đối tác đồng hành tại thị trường Thanh Hóa.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        {/* --- ẢNH BANNER (TÙY CHỌN) --- */}
        {/* Bạn có thể thêm một ảnh banner tuyển dụng vào public/images/career-banner.jpg */}
        <img 
          src="/images/career-banner.jpg" 
          alt="Tuyển dụng" 
          className="w-full h-48 object-cover" 
          onError={(e) => (e.currentTarget.style.display = 'none')} // Ẩn nếu ảnh lỗi
        />

        <div className="p-8 md:p-12">
          
          {/* --- VỊ TRÍ TUYỂN DỤNG --- */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-l-4 border-blue-600 pl-3">
              Vị Trí Tuyển Dụng
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md text-center">
                <FaStar className="text-4xl text-yellow-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Cộng Tác Viên (CTV)</h3>
              </div>
              <div className="flex-1 bg-green-50 p-6 rounded-lg shadow-md text-center">
                <FaUserCheck className="text-4xl text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-800">Nhân Sự Bán Hàng</h3>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Khu vực:</strong> Tỉnh Thanh Hóa.
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Mô hình:</strong> Phục vụ đa kênh (Tạp hóa, Nhà hàng, Khách sạn, Bán buôn, Bán lẻ, Online).
            </p>
          </section>

          {/* --- ƯU ĐIỂM SẢN PHẨM --- */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-l-4 border-blue-600 pl-3">
              Tại Sao Bạn Nên Chọn Sản Phẩm DUNIX8?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span><strong>Chất lượng tốt,</strong> hiệu quả vượt trội.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span>Hương thơm <strong>lưu hương</strong> dài lâu.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span><strong>Pháp lý đầy đủ,</strong> chứng từ, hóa đơn đỏ rõ ràng.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span><strong>Giá thành hợp lý,</strong> chiết khấu cao, cạnh tranh.</span>
              </li>
            </ul>
          </section>

          {/* --- YÊU CẦU ỨNG VIÊN --- */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-l-4 border-blue-600 pl-3">
              Chúng Tôi Tìm Kiếm
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span>Người có <strong>đam mê kinh doanh</strong> và mong muốn phát triển.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span>Tinh thần làm việc <strong>độc lập, chủ động</strong> trong công việc.</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <span>Kỹ năng <strong>bán hàng</strong> và <strong>chăm sóc khách hàng</strong> tốt.</span>
              </li>
            </ul>
          </section>

          {/* --- LIÊN HỆ --- */}
          <section className="bg-gray-100 p-6 rounded-lg text-center shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ứng Tuyển Ngay!
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Đừng bỏ lỡ cơ hội gia nhập đội ngũ DUNIX8.
            </p>
            <a 
              href="tel:0396850447" 
              className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-xl px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              <FaPhoneAlt className="mr-3" />
              Liên hệ: 0396.850.447
            </a>
            <p className="mt-4 text-gray-500">
              Công ty TNHH DUNIX8
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TuyenDungPage;