"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import TootipElement from "./TootipElement";
import { addItemToCart } from "@/api/service/cartActions";

const GridItem = (props: Product) => {
  const dispatch = useDispatch<any>();

  function handleAddItemToCart() {
    dispatch(addItemToCart(props.id!));
    toast.success("Item added to cart.");
  }

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
        <button
          onClick={handleAddItemToCart}
          className="bg-primary p-2 rounded-full absolute top-3 right-3"
        >
          <FaCartPlus className="text-lg text-white" />
        </button>
      </div>
      <div className="px-5 py-2">
        <TootipElement tooltipText={props.title!}>
          <p className="text-gray-700 text-xs truncate">{props.title}</p>
        </TootipElement>
        <div className="font-bold text-base mb-2 truncate">{`$ ${props.price}`}</div>
      </div>
    </div>
  );
};

export default GridItem;
