import React from "react";
import Link from "next/link";
import categories from "../data/categories.json";
import Image from "next/image";

export const Categories = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Kategoriler</h2>
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/products/${category.id}`}>
              <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 hover:shadow-lg transition cursor-pointer">
                <div className="relative w-full h-32 mb-2">
                  <Image
                    src={category.image_path}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h4 className="text-base font-semibold">{category.name}</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
