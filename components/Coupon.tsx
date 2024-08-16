import React, { useState } from "react";
import TootipElement from "./TootipElement";
import { FaCircleInfo } from "react-icons/fa6";
import Input from "./Input";
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { setCouponApplied } from "@/app/lib/features/cart/cartSlice";
import { IoMdCloseCircle } from "react-icons/io";

const Coupon = () => {
  const [coupon, setCoupon] = useState("");
  const [applyCoupon, setApplyCoupon] = useState(false);
  const couponApplied = useSelector(
    (state: RootState) => state.cart.couponApplied
  );
  const dispatch = useDispatch();
  const [errorVisible, setErrorVisible] = useState(false);

  const handleApply = (event: any) => {
    event.preventDefault();
    setErrorVisible(coupon.trim().toUpperCase() != "FREE10");
    dispatch(setCouponApplied(coupon.trim().toUpperCase() === "FREE10"));
  };

  return (
    <div className="m-5 bg-white shadow px-3 py-2">
      {couponApplied && (
        <div className="center">
          <div className="flex items-center gap-4">
            <FaCircleCheck className="text-sucess" />
            <p className="font-semibold text-base">FREE10 Coupon applied.</p>
          </div>
          <button onClick={() => dispatch(setCouponApplied(false))}>
            <IoMdCloseCircle className="text-error text-xl" />
          </button>
        </div>
      )}
      {!couponApplied && (
        <React.Fragment>
          {!applyCoupon && (
            <div className="flex items-center gap-3">
              <button
                className="text-base font-semibold"
                onClick={() => setApplyCoupon(true)}
              >
                Have coupon ?
              </button>
              <TootipElement
                tooltipText={"Use coupon FREE10 to get 10% discount"}
                className="w-[50%]"
              >
                <FaCircleInfo className="text-lg text-primary" />
              </TootipElement>
            </div>
          )}
          {applyCoupon && (
            <form onSubmit={handleApply}>
              <div className="flex items-center gap-4">
                <Input
                  label={"Enter coupon"}
                  type={"text"}
                  value={coupon}
                  setValue={setCoupon}
                  containerClassName={"px-3"}
                />
                <button
                  type="submit"
                  className="px-4 py-1 text-white bg-primary rounded-sm"
                >
                  Apply
                </button>
              </div>
              {errorVisible && (
                <div
                  className="px-3 w-full text-sm text-error"
                  data-twe-input-helper-ref
                >
                  Invalid coupon, Please try FREE10.
                </div>
              )}
            </form>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Coupon;
