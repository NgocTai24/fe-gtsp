import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const GioiThieuPage: React.FC = () => {
  const storyImages = [
    '/images/gioithieu/catalogue-cover.webp',
    '/images/gioithieu/catalogue-giat-xa.webp',
    '/images/gioithieu/catalogue-lau-san.webp',
    '/images/gioithieu/catalogue-rua-chen.webp',
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <motion.div
      className="container mx-auto p-4 space-y-16"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* --- HERO --- */}
      <motion.section
        className="text-center py-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-md"
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">Về DUNIX8</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Mang đến giải pháp giặt xả, tẩy rửa AN TOÀN - TIẾT KIỆM - HIỆU QUẢ
          cho mọi gia đình Việt.
        </p>
      </motion.section>

      {/* --- CÂU CHUYỆN --- */}
      <motion.section
        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-green-200 transition duration-500"
        variants={fadeInUp}
        custom={0.2}
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-green-50 to-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu chuyện của chúng tôi</h2>
          <p className="text-gray-700 leading-relaxed">
            DUNIX8 ra đời với khát vọng mang đến cho người Việt những sản phẩm tẩy rửa an toàn,
            hiệu quả và thân thiện môi trường. Mỗi dòng sản phẩm đều được nghiên cứu kỹ lưỡng,
            hướng đến sự tiện lợi và bảo vệ sức khỏe người dùng.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/about-us-banner.jpg"
            alt="Câu chuyện DUNIX8"
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
      </motion.section>

      {/* --- SỨ MỆNH --- */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10"
        variants={fadeInUp}
        custom={0.3}
      >
        {/* Cột nội dung */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold text-green-700 border-l-4 border-green-500 pl-3">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tại DUNIX8, chúng tôi tin rằng một ngôi nhà sạch sẽ không cần phải đánh đổi
            bằng sức khỏe của gia đình hay môi trường. Sứ mệnh của chúng tôi là
            cung cấp sản phẩm chất lượng cao, an toàn, thân thiện và tiết kiệm.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi tự hào là thương hiệu Việt, hiểu rõ nhu cầu của người Việt,
            cam kết mang đến giá trị thật với chi phí hợp lý nhất.
          </p>
        </div>

        {/* Cột ảnh - SLIDER */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeInUp}
          custom={0.4}
        >
          <div className="w-full md:w-3/4 max-w-md rounded-xl overflow-hidden shadow-2xl border border-green-100">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect="fade"
              className="w-full h-full"
            >
              {storyImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Câu chuyện DUNIX8 ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.section>

      {/* --- GIÁ TRỊ CỐT LÕI --- */}
      <motion.section
        className="pt-12"
        variants={fadeInUp}
        custom={0.5}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: <FaShieldAlt className="text-6xl text-green-600 mx-auto mb-4" />,
            title: 'Chất Lượng & An Toàn',
            text: 'Sản phẩm có chứng từ đầy đủ, an toàn cho da kể cả da nhạy cảm.'
          },
          {
            icon: <FaLeaf className="text-6xl text-green-600 mx-auto mb-4" />,
            title: 'Thân Thiện Môi Trường',
            text: 'Thành phần dễ phân hủy sinh học, giảm thiểu tác động đến môi trường.'
          },
          {
            icon: <FaUsers className="text-6xl text-green-600 mx-auto mb-4" />,
            title: 'Vì Cộng Đồng',
            text: 'Cam kết giá thành hợp lý để mọi gia đình đều có thể tiếp cận sản phẩm chất lượng.'
          }].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 hover:shadow-green-200 transition duration-300"
              variants={fadeInUp}
              custom={0.6 + index * 0.1}
            >
              {item.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- CTA --- */}
      <motion.section
        className="mt-16 py-16 bg-gradient-to-r from-green-600 to-green-500 text-white text-center rounded-2xl shadow-2xl"
        variants={fadeInUp}
        custom={0.8}
      >
        <h2 className="text-4xl font-extrabold mb-4">Khám Phá Sản Phẩm Của Chúng Tôi</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Trải nghiệm sự khác biệt mà DUNIX8 mang lại cho ngôi nhà của bạn.
        </p>
        <Link
          to="/nuoc-giat"
          className="bg-white text-green-700 font-bold py-3 px-10 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Xem Sản Phẩm Ngay
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default GioiThieuPage;
