import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import { FaLeaf, FaShieldAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

// 🖼️ Thêm danh sách ảnh banner
const banners = [
  {
    img: "/images/banner1.jpg",
    text: "Sạch Tự Nhiên – An Toàn Tuyệt Đối",
    sub: "Giải pháp giặt xả thân thiện môi trường cho mọi gia đình.",
  },
  {
    img: "/images/banner2.jpg",
    text: "DUNIX8 – Bảo vệ sức khỏe, bảo vệ trái đất",
    sub: "Sản phẩm được chứng nhận an toàn và sinh học.",
  },
  {
    img: "/images/banner3.jpg",
    text: "Hương thơm dịu nhẹ, cho cuộc sống an lành",
    sub: "Trải nghiệm cảm giác sạch sẽ và tươi mát mỗi ngày.",
  },
];

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  // ✅ Tự động chuyển ảnh sau 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Lấy sản phẩm nổi bật
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get<Product[]>("/products?_limit=3");
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm nổi bật:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="space-y-20">
      {/* 🧭 HERO CAROUSEL */}
      <section className="relative overflow-hidden rounded-xl shadow-xl">
        <div className="relative h-[500px] md:h-[600px]">
          {banners.map((banner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentBanner ? 1 : 0,
                scale: index === currentBanner ? 1 : 1.02,
              }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 transition-all duration-700 ease-in-out`}
              style={{
                backgroundImage: `url(${banner.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {banner.text}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl mb-8 max-w-2xl"
                >
                  {banner.sub}
                </motion.p>
                <Link
                  to="/nuoc-giat"
                  className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition"
                >
                  Khám phá ngay
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔘 Nút điều hướng nhỏ */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentBanner ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* 🌱 GIÁ TRỊ CỐT LÕI */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Chất Lượng & An Toàn</h3>
            <p className="text-gray-600">
              Sản phẩm có chứng nhận đầy đủ, an toàn cho da nhạy cảm.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Thân Thiện Môi Trường</h3>
            <p className="text-gray-600">
              Thành phần phân hủy sinh học, bảo vệ môi trường sống.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <FaUsers className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Vì Cộng Đồng</h3>
            <p className="text-gray-600">
              Giá thành hợp lý, giúp mọi nhà tiếp cận sản phẩm tốt nhất.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 🛍️ SẢN PHẨM NỔI BẬT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Sản phẩm Nổi bật
        </h2>
        {loading && <div className="text-center">Đang tải sản phẩm...</div>}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </motion.section>

      {/* 📞 CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gray-100 rounded-lg p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Bạn quan tâm đến sản phẩm của DUNIX8?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Hãy liên hệ ngay với chúng tôi để nhận tư vấn hoặc cơ hội hợp tác.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/tuyen-dung"
            className="bg-white text-green-600 border border-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition"
          >
            Cơ hội Hợp tác
          </Link>
          <Link
            to="/contact"
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition"
          >
            Liên hệ Ngay
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
