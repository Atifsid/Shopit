"use client";
import { RootState } from "@/app/lib/store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidExit } from "react-icons/bi";
import { logout } from "@/app/lib/features/auth/authSlice";
import { ROUTES } from "@/constants/routes";
import { useEffect } from "react";
import { getCartSize } from "@/api/service/cartActions";

const Header = () => {
  const count = useSelector((state: RootState) => state.cart.cartSize);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getCartSize());
  }, []);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around py-1 bg-primary px-10 sticky top-0 z-50">
      <Link href={"/"} className="cursor-pointer">
        <h3 className="text-white font-mono font-bold text-xl">SHOPiT</h3>
        <h6 className="text-xs italic text-white">Buy anything</h6>
      </Link>
      <div className="flex items-center gap-5">
        <Link
          href={ROUTES.cart}
          className="py-3 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Cart"
        >
          <FaShoppingCart className="text-white text-2xl" />
          {count > 0 && (
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-black">
                {count}
              </div>
            </span>
          )}
        </Link>
        <Link href={ROUTES.login}>
          <BiSolidExit
            onClick={() => dispatch(logout())}
            className="text-white text-2xl"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
