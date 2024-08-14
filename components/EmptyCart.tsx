import React from 'react'
import { BsCartXFill } from "react-icons/bs";

const EmptyCart = () => {
    return (
        <div className='card mx-5 my-3 p-5 flex items-center gap-3'>
            <BsCartXFill className='text-red-700 text-xl' />
            <span className='text-center font-semibold'>Your cart is empty.</span>
        </div>
    )
}

export default EmptyCart