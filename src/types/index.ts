// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string; // <-- THÊM DÒNG NÀY
  main_image: string;
  category_id: number;
}