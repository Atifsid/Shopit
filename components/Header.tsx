"use client";
import { RootState } from "@/app/lib/store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state: RootState) => state.cart.cartSize);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around py-1 bg-primary px-10">
      <Link href={"/"} className="cursor-pointer">
        <h3 className="text-white font-mono font-bold text-xl">SHOPiT</h3>
        <h6 className="text-xs italic text-white">Buy anything</h6>
      </Link>
      <Link
        href={"/cart"}
        className="py-3 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Cart"
      >
        <FaShoppingCart className="text-white text-2xl" />
        {count > 0 && (
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white">
              {count}
            </div>
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
