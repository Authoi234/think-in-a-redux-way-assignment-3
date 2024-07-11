import React from 'react';
import '../../../css/output.css';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const CartContainer = () => {
    const cart = useSelector((state) => state.products.cart);

    return (
        <div className="space-y-6">
            {
                cart.map(cartItem => <CartCard cartItem={cartItem}></CartCard>)
            }
        </div>
    );
};

export default CartContainer;