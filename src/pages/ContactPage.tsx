// src/pages/ContactPage.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Định nghĩa schema như cũ
const contactSchema = z.object({
  fullName: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  message: z.string().min(10, 'Tin nhắn phải có ít nhất 10 ký tự'),
});

// 2. DÙNG ZOD ĐỂ TẠO TYPE TỰ ĐỘNG
// Lấy type từ schema, không cần viết tay
type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  // 3. TYPING CHO useForm
  // Báo cho hook biết form này sẽ quản lý dữ liệu theo khuôn mẫu ContactFormData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ // <-- Thêm type vào đây
    resolver: zodResolver(contactSchema),
  });

  // 4. HÀM ONSUBMIT GIỜ ĐÂY CÓ TYPE AN TOÀN
  // TypeScript sẽ tự biết "data" có các thuộc tính: fullName, email, message
  const onSubmit = (data: ContactFormData) => {
    console.log('Dữ liệu form:', data);
    alert('Gửi liên hệ thành công! (Xem ở console)');
    // Khi bạn gõ "data.", VS Code sẽ gợi ý các thuộc tính cho bạn!
  };

  const FormError = ({ message }: { message?: string }) => { // Thêm type cho props
    if (!message) return null;
    return <span className="text-red-500 text-sm">{message}</span>;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liên hệ với chúng tôi</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
        <div>
          <label htmlFor="fullName" className="block font-medium">Họ và Tên</label>
          <input
            id="fullName"
            {...register('fullName')}
            className="w-full border p-2 rounded mt-1"
          />
          <FormError message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            id="email"
            {...register('email')}
            className="w-full border p-2 rounded mt-1"
          />
          <FormError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">Tin nhắn</label>
          <textarea
            id="message"
            {...register('message')}
            className="w-full border p-2 rounded mt-1"
            rows={4}
          />
          <FormError message={errors.message?.message} />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
          Gửi
        </button>
      </form>
    </div>
  );
};

export default ContactPage;