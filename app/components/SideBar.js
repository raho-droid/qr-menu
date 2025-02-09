import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import categories from "../data/categories.json";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

export const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg z-[1000] transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-full md:w-96`}
    >
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-xl font-bold">Menü</h2>
        <button onClick={toggleSidebar} className="hover:text-red-500">
          <IoClose size={24} />
        </button>
      </div>
      <nav
        className="flex flex-col p-4 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        <Link href="/" onClick={toggleSidebar}>
          <div className="flex items-center gap-2 p-4 hover:bg-gray-100 rounded">
            <IoHomeOutline size={24} />
            <h4 className="text-base font-semibold">Anasayfa</h4>
          </div>
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.id}`}
            onClick={toggleSidebar}
          >
            <div className="flex items-center gap-2 p-4 hover:bg-gray-100 rounded">
              <IoIosInformationCircleOutline size={24} />
              <h4 className="text-base font-semibold">{category.name}</h4>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
