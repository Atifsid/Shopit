import React from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";
import { CartProduct } from "@/types";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  decreaseQuantity,
  addProductToCart,
} from "@/app/lib/features/cart/cartSlice";
import Divider from "./Divider";
import { roundOffToDecimalPlaces } from "@/utils/functions";

const CartItem = (props: CartProduct) => {
  const dispatch = useDispatch();

  return (
    <div className="card mx-5 my-3 px-6 py-4">
      <div className="flex justify-between items-center gap-5">
        <Image
          src={props.image!}
          alt={props.title!}
          height={80}
          width={80}
          objectFit="cover"
          className="aspect-square"
        />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-end">{props.title}</p>
          <p className="text-base text-end">{`${
            props.quantity! > 1 ? `${props.quantity} x` : ""
          } $  ${props.price}`}</p>
          <div className="flex items-center justify-end gap-5 mt-2">
            <div className="flex items-center gap-5 bg-gray-200 shadow-sm rounded-md">
              <button
                onClick={() => dispatch(addProductToCart(props))}
                className="bg-gray-300 p-1 rounded-tl-md rounded-bl-md"
              >
                <FaPlus className="text-gray-700" />
              </button>
              <span className="font-semibold text-base border bottom-2 cursor-default">
                {props.quantity}
              </span>
              <button
                onClick={() => dispatch(decreaseQuantity(props))}
                className="bg-gray-300 p-1 rounded-tr-md rounded-br-md"
              >
                <FaMinus className="text-gray-700" />
              </button>
            </div>
            <FaTrash
              onClick={() => dispatch(removeProductFromCart(props))}
              className="text-red-600 text-lg text-end cursor-pointer"
            />
          </div>
          <Divider />
          <p className="text-base text-end">{`$ ${roundOffToDecimalPlaces(
            props.quantity! * props.price!
          )}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
