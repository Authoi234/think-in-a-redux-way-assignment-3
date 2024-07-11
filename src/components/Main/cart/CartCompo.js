import React from 'react';
import CartBillings from './CartBillings';
import '../../../css/output.css';
import CartContainer from './CartContainer';

const CartCompo = () => {
    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
            <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div className="cartListContainer">
                <CartContainer></CartContainer>

                <CartBillings></CartBillings>
            </div>
        </div>
    );
};

export default CartCompo;