import React from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, minusQuantityFromCart, plusQuantityFromCart } from '../../../redux/Product/actions';

const CartCard = ({cartItem}) => {
    const dispatch = useDispatch();
    const mainProducts = useSelector((state) => state.products.products);
    const product = mainProducts.find(item => item.id === cartItem.id);
    
    const handlePlusQuantity = () => {
        dispatch(plusQuantityFromCart(cartItem));
    };

    const handleMinusQuantity = () => {        
        dispatch(minusQuantityFromCart(cartItem));
    };

    const handleDelete = () => {        
        dispatch(deleteFromCart(cartItem));
    };
    
    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                <img className="lws-cartImage" src={cartItem.image} alt="product" />
                <div className="space-y-2">
                    <h4 className="lws-cartName">{cartItem.name}</h4>
                    <p className="lws-cartCategory">{cartItem.category}</p>
                    <p>BDT <span className="lws-cartPrice">{cartItem.price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity" onClick={handlePlusQuantity} disabled={product.quantity === 0 && true}>
                        <FaPlus className='text-lg'></FaPlus>
                    </button>
                    <span className="lws-cartQuantity">{cartItem.quantity}</span>
                    <button className="lws-decrementQuantity" onClick={handleMinusQuantity} disabled={cartItem.quantity === 0 && true}>
                        <FaMinus className='text-lg'></FaMinus>
                    </button>
                </div>
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{cartItem.totalPrice}</span></p>
            </div>
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={handleDelete}>
                    <FaTrash className='text-lg text-red-400' ></FaTrash>
                </button>
            </div>
        </div>
    );
};

export default CartCard;