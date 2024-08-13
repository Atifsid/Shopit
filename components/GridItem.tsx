import React from "react";
import Image from "next/image";
import { Product } from "@/types";

const GridItem = (props: Product) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white m-5">
      <Image
        src={props.image!}
        alt={props.title!}
        height={500}
        width={500}
        objectFit="cover"
        className="aspect-square w-full p-5"
      />
      <div className="px-5 py-4">
        <div className="group relative">
          <p className="text-gray-700 text-base truncate">{props.title}</p>
          <span className="absolute bottom-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
            {props.title}
          </span>
        </div>
        <div className="font-bold text-lg mb-2 truncate">{`$ ${props.price}`}</div>
      </div>
    </div>
  );
};

export default GridItem;
