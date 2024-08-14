import React from "react";

export const Loader = () => {
  return (
    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  );
};
