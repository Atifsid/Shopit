import React from "react";

const Button = ({
  children,
  click,
  type,
}: {
  children: any;
  click?: any;
  type: any;
}) => {
  return (
    <button
      className="bg-primary h-10 w-full rounded-md"
      type={type}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
