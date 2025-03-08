/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Statik export oluşturmak için
  images: {
    unoptimized: true, // Görsellerin Next.js tarafından optimize edilmesini engeller
    loader: "akamai", // Akamai loader'ı kullanarak görsellerin düzgün yüklenmesini sağlar
    path: "", // Görsellerin public dizininden yüklenmesini sağlar
  },
};

export default nextConfig;
