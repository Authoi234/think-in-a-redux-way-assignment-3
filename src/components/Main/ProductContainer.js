import React from 'react';
import '../../css/output.css';
import Product from './Product';
import { useSelector } from 'react-redux';

const ProductContainer = () => {
    const products = useSelector((state) => state.products.products);

    if (products.length) {
        return (
            <div className="productContainer" id="lws-productContainer">
                {products.map((product, i) => <Product key={i} product={product}></Product>)}
            </div>
        );
    }
    else{
        return <h1 className='text-lg'>No Products Found</h1>
    }

};

export default ProductContainer;