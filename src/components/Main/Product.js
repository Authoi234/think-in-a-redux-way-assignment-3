import React from 'react';

const Product = () => {
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src="https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=n-53sp-rgdEyhzQLT5YTUEcafMj2qhf4Ke7mMWAQpxs=" alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">Spring and summershoes</h4>
                <p className="lws-productCategory">Mens shoes</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">400</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">10</span></p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;