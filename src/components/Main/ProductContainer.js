import React from 'react';
import '../../css/output.css';
import Product from './Product';
import { useSelector } from 'react-redux';

const ProductContainer = () => {
    const products = useSelector((state) => state.products.products);
    return (
        <div className="productContainer" id="lws-productContainer">
            {products.map((product, i) => <Product key={i} product={product}></Product>)}
        </div>
    );
};

export default ProductContainer;