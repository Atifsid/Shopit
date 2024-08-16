import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div className="centered-div height-without-header">
      <div className="card p-10 m-5 text-center flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-5">
          <BiSolidErrorCircle className="text-error text-5xl" />
          <h1 className="text-error text-5xl font-semibold font-mono">
            Error 500
          </h1>
        </div>
        <h6 className="text-3xl italic">
          Something went wrong, Please try again later.
        </h6>
      </div>
    </div>
  );
};

export default Error;
