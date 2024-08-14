"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/app/lib/features/cart/cartSlice";

const GridItem = (props: Product) => {
  const dispatch = useDispatch();

  return (
    <div className="m-5 card max-w-sm">
      <div className="relative">
        <Image
          src={props.image!}
          alt={props.title!}
          height={500}
          width={500}
          objectFit="cover"
          className="aspect-square w-full p-5"
        />
        <button onClick={() => dispatch(addProductToCart({ ...props }))} className="bg-primary p-2 rounded-full absolute top-3 right-3">
          <FaCartPlus className="text-lg text-white" />
        </button>
      </div>
      <div className="px-5 py-2">
        <div className="group relative">
          <p className="text-gray-700 text-xs truncate">{props.title}</p>
          <span className="absolute bottom-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            {props.title}
          </span>
        </div>
        <div className="font-bold text-base mb-2 truncate">{`$ ${props.price}`}</div>
      </div>
    </div>
  );
};

export default GridItem;
