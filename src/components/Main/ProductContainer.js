import React from 'react';
import '../../css/output.css';
import Product from './Product';
import { useSelector } from 'react-redux';

const ProductContainer = () => {
    const products = useSelector((state) => state.products.products);
    console.log(products)
    return (
        <div className="productContainer" id="lws-productContainer">
            {products.map((product, i) => <Product key={i}></Product>)}
        </div>
    );
};

export default ProductContainer;