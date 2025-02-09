import React from "react";
import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactless } from "react-icons/md";
export const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-2 flex justify-evenly items-center border-t">
      <Link href="/">
        <button className="flex flex-col items-center text-black hover:text-red-500 font-semibold ">
          <IoHomeOutline size={24} />
          <span className="text-base">Anasayfa</span>
        </button>
      </Link>
      <Link href="/about">
        <button className="flex flex-col items-center text-black hover:text-red-500 font-semibold ">
          <IoIosInformationCircleOutline size={24} />
          <span className="text-base">Hakkımızda</span>
        </button>
      </Link>
      <Link href="/contact">
        <button className="flex flex-col items-center text-black hover:text-red-500 font-semibold ">
          <MdOutlineContactless size={24} />
          <span className="text-base">İletişim</span>
        </button>
      </Link>
    </div>
  );
};
