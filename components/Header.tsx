import React from "react";

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="center-content items-center common-padding h-16">
        <div className="cursor-pointer">
          <h3 className="text-white font-mono font-bold text-xl italic">
            SHOPiT
          </h3>
          <h6 className="text-xs italic text-white">Buy anything</h6>
        </div>
        <h3 className="text-white cursor-pointer">Cart</h3>
      </div>
    </div>
  );
};

export default Header;
