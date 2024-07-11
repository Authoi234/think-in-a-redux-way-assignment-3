import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Product/actions';

const Product = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({...product})); 
    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={product.image} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.name}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
                </div>
                <button className="lws-btnAddToCart" disabled={product.quantity === 0 && true} onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;