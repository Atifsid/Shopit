import React from "react";

const TootipElement = ({
  tooltipText,
  children,
}: {
  tooltipText: string;
  children: any;
}) => {
  return (
    <div className="group relative w-96">
      {children}
      <span className="absolute bottom-7 z-50 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {tooltipText}
      </span>
    </div>
  );
};

export default TootipElement;
