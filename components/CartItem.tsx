import React from 'react'
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";
import { CartProduct } from '@/types';

const CartItem = ({ image, title, price }: CartProduct) => {
    return (
        <div className='card mx-5 my-3 px-6 py-4'>
            <div className='flex justify-center items-center gap-5'>
                <Image
                    src={image!}
                    alt={title!}
                    height={80}
                    width={80}
                    objectFit="cover"
                    className="aspect-square"
                />
                <div className='flex flex-col gap-1'>
                    <p className='text-base font-semibold'>{title}</p>
                    <p className='text-base'>{`$ ${price}`}</p>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-5 bg-gray-200 shadow-sm rounded-md max-w-24'>
                            <button className='bg-gray-300 p-1 rounded-tl-md rounded-bl-md'>
                                <FaPlus className='text-gray-700' />
                            </button>
                            <span className='font-semibold text-base border bottom-2 cursor-default'>0</span>
                            <button className='bg-gray-300 p-1 rounded-tr-md rounded-br-md'>
                                <FaMinus className='text-gray-700' />
                            </button>
                        </div>
                        <FaTrash className='text-red-600 text-lg cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem