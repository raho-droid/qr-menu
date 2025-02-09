import { getProductsByCategory } from "@/app/utils/getProductsByCategory ";
import categories from "@/app/data/categories.json";
import Image from "next/image";

const ProductsPage = ({ params }) => {
  const { categoryId } = params;

  const category = categories.find((cat) => cat.id === parseInt(categoryId));
  const products = getProductsByCategory(categoryId);

  if (!category) return <p>Kategori bulunamadı.</p>;

  return (
    <div className="p-1">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative flex items-center w-40 h-40">
              <Image
                src={product.image_path}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-700 font-medium">
                {product.price} TL
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;

export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id.toString(),
  }));
}
