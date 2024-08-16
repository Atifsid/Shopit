import React from "react";

const Button = ({
  children,
  click,
  type,
  className,
}: {
  children: any;
  click?: any;
  type: any;
  className?: any;
}) => {
  return (
    <button
      className={`bg-primary h-10 w-full rounded-md ${className}`}
      type={type}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
