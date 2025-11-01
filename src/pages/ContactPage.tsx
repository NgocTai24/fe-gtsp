// src/pages/ContactPage.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaUser, FaEnvelope, FaPencilAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// 1. Schema và Type (Giữ nguyên)
const contactSchema = z.object({
  fullName: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  message: z.string().min(10, 'Tin nhắn phải có ít nhất 10 ký tự'),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Helper hiển thị lỗi (Giữ nguyên)
const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <span className="text-red-500 text-sm mt-1">{message}</span>;
};

const ContactPage: React.FC = () => {
  // 2. Logic Form (Giữ nguyên)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Dữ liệu form:', data);
    alert('Gửi liên hệ thành công! (Xem ở console)');
    // Logic gọi API POST /contacts sẽ ở đây
  };

  // 3. GIAO DIỆN MỚI
  return (
    <div className="container mx-auto p-4 py-10">
      {/* --- Tiêu đề --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-gray-600 mt-2">
          Chúng tôi luôn sẵn sàng lắng nghe bạn.
        </p>
      </div>

      {/* --- Bố cục 2 cột --- */}
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl mx-auto">

        {/* === CỘT BÊN TRÁI: FORM LIÊN HỆ === */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Gửi tin nhắn cho chúng tôi
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Input Họ và Tên */}
            <div>
              <label htmlFor="fullName" className="block font-medium text-gray-700 mb-1">
                Họ và Tên
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaUser className="text-gray-400" />
                </span>
                <input
                  id="fullName"
                  {...register('fullName')}
                  className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <FormError message={errors.fullName?.message} />
            </div>

            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaEnvelope className="text-gray-400" />
                </span>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="ban@email.com"
                />
              </div>
              <FormError message={errors.email?.message} />
            </div>

            {/* Input Tin nhắn */}
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                Nội dung tin nhắn
              </label>
              <div className="relative">
                <span className="absolute top-3 left-0 flex items-center pl-3">
                  <FaPencilAlt className="text-gray-400" />
                </span>
                <textarea
                  id="message"
                  {...register('message')}
                  className="w-full border border-gray-300 p-2 pl-10 rounded-md h-32 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Nội dung bạn muốn trao đổi..."
                  rows={5}
                />
              </div>
              <FormError message={errors.message?.message} />
            </div>

            {/* Nút Gửi */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Gửi Liên Hệ
            </button>
          </form>
        </div>

        {/* === CỘT BÊN PHẢI: THÔNG TIN & ẢNH === */}
        <div className="w-full md:w-1/2 bg-blue-600 p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <FaPhoneAlt className="text-2xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Điện thoại</h3>
                <a href="tel:0396850447" className="hover:underline text-blue-100">
                  0396.850.447 (Mr. Dũng)
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-2xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:info@dunix8.com" className="hover:underline text-blue-100">
                  info@dunix8.com (Giả định)
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-2xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Địa chỉ</h3>
                <p className="text-blue-100">
                  Thôn Tân Luật, [Xã Công Chính], Tỉnh Thanh Hóa
                </p>
              </div>
            </li>
          </ul>

          {/* Ảnh minh họa */}
          <div className="mt-8">
            <img
              src="/images/contact.jpg"
              alt="Liên hệ chúng tôi"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              onError={(e) => (e.currentTarget.style.display = 'none')} // Ẩn nếu ảnh lỗi
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;