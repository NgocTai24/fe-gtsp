// src/pages/GioiThieuPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';

const GioiThieuPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-12">

      {/* --- PHẦN HERO (TIÊU ĐỀ) --- */}
      <section className="text-center pt-8 pb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Về DUNIX8</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mang đến giải pháp giặt xả, tẩy rửa AN TOÀN - TIẾT KIỆM - HIỆU QUẢ
          cho mọi gia đình Việt.
        </p>
      </section>

      {/* --- BANNER ẢNH CHÍNH (Vẫn giữ object-cover, bạn có thể chỉnh h-XX) --- */}
      <section>
        {/* <img
          src="/images/about-us-banner.jpg" // Ảnh bạn đã thêm (828x1171)
          alt="Giới thiệu DUNIX8"
          className="w-full h-64 object-cover object-center rounded-lg shadow-xl" // Đã thêm object-center
          onError={(e) => (e.currentTarget.style.display = 'none')} 
        /> */}

        <div className="flex flex-col md:flex-row bg-green-100 rounded-lg shadow-xl overflow-hidden">
          <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu chuyện của chúng tôi</h2>
            <p className="text-gray-700">Nội dung text ở đây...</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/about-us-banner.jpg"
              alt="Câu chuyện DUNIX8"
              className="w-full h-full object-contain md:object-cover" 
            />
          </div>
        </div>

      </section>

      {/* --- SỨ MỆNH VÀ CÂU CHUYỆN (2 CỘT) --- */}
      <section className="flex flex-col md:flex-row items-center gap-8 pt-8">
        {/* Cột nội dung */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 inline-block">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tại DUNIX8, chúng tôi tin rằng một ngôi nhà sạch sẽ không cần phải đánh đổi
            bằng sức khỏe của gia đình hay sự an toàn của môi trường. Sứ mệnh của chúng tôi là
            cung cấp những sản phẩm hóa phẩm chất lượng cao, có nguồn gốc rõ ràng,
            an toàn cho da và lưu giữ hương thơm bền lâu.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi tự hào là thương hiệu Việt, hiểu rõ nhu cầu của người tiêu dùng Việt,
            cam kết mang đến giá trị thật với chi phí hợp lý nhất.
          </p>
        </div>

        {/* Cột ảnh - Đã điều chỉnh để hiển thị ảnh dọc tốt hơn */}
        <div className="md:w-1/2 flex justify-center"> {/* Thêm flex justify-center */}
          <div className="w-full md:w-3/4 max-w-xs md:max-w-md h-auto overflow-hidden rounded-lg shadow-lg"> {/* Giới hạn chiều rộng */}
            <img
              src="/images/catalogue-cover.webp" // Ảnh bạn đã thêm (đặt ảnh 828x1171 vào đây)
              alt="Câu chuyện công ty DUNIX8"
              className="w-full h-full object-contain" // Thay object-cover thành object-contain để không bị cắt
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        </div>
      </section>

      {/* --- GIÁ TRỊ CỐT LÕI (3 CỘT ICON) --- */}
      <section className="pt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Giá trị 1: An Toàn */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <FaShieldAlt className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Chất Lượng & An Toàn</h3>
            <p className="text-gray-600">
              Sản phẩm có đầy đủ pháp lý, chứng từ hóa đơn. Tuyệt đối an toàn
              cho da, kể cả da nhạy cảm.
            </p>
          </div>
          {/* Giá trị 2: Thiên Nhiên */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <FaLeaf className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thân Thiện Môi Trường</h3>
            <p className="text-gray-600">
              Thành phần dễ phân hủy sinh học, giảm thiểu tác động
              tới môi trường sống của chúng ta.
            </p>
          </div>
          {/* Giá trị 3: Con Người */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <FaUsers className="text-6xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Vì Cộng Đồng</h3>
            <p className="text-gray-600">
              Cam kết giá thành hợp lý để mọi gia đình đều có thể tiếp cận
              sản phẩm chất lượng cao.
            </p>
          </div>
        </div>
      </section>

      {/* --- KÊU GỌI HÀNH ĐỘNG (CTA) --- */}
      <section className="mt-12 py-16 bg-green-600 text-white text-center rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Khám Phá Sản Phẩm Của Chúng Tôi</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Trải nghiệm sự khác biệt mà DUNIX8 mang lại cho ngôi nhà của bạn.
        </p>
        <Link
          to="/nuoc-giat"
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Xem Sản Phẩm Ngay
        </Link>
      </section>

    </div>
  );
};

export default GioiThieuPage;