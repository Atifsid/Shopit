import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around py-3 bg-primary px-10">
      <Link href={"/"} className="cursor-pointer">
        <h3 className="text-white font-mono font-bold text-xl italic">
          SHOPiT
        </h3>
        <h6 className="text-xs italic text-white">Buy anything</h6>
      </Link>
      <h3 className="text-white cursor-pointer">Cart</h3>
    </header>
  );
};

export default Header;
