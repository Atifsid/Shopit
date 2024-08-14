import CartItem from '@/components/CartItem';
import Divider from '@/components/Divider';
import React from 'react'

const Cart = () => {
    const product = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    };
    return (
        <section className='flex justify-center'>
            <div className='flex-col my-3'>
                {[1, 2].map(_ => <CartItem {...product} />)}
                <div className='m-5 bg-white shadow px-3 py-2'>
                    <div className='center'>
                        <span className='text-base'>{`Subtotal (1 item) :`}</span>
                        <span className='text-lg font-bold'>{`$ 100`}</span>
                    </div>
                    <div className='center'>
                        <span className='text-base'>{`Discount 10% :`}</span>
                        <span className='text-lg font-bold text-red-500'>{`- $ 100`}</span>
                    </div>
                    <Divider />
                    <div className='center'>
                        <span className='text-base font-bold'>{`Total :`}</span>
                        <span className='text-lg font-bold'>{`$ 100`}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart