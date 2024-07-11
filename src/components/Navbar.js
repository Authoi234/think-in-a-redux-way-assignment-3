import React from 'react';
import img from "../assets/images/logo.png";
import { useSelector } from 'react-redux';
import { FaBagShopping } from "react-icons/fa6";
import '../css/output.css';

const Navbar = ({ setIsCartPage }) => {
    const totalCart = useSelector((state) => state.products.cart);

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={img} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a style={{cursor: 'pointer'}} onClick={() => setIsCartPage(false)} className="navHome" id="lws-home"> Home </a>
                    <a style={{cursor: 'pointer'}} onClick={() => setIsCartPage(true)} className="navCart" id="lws-cart">
                        <FaBagShopping />
                        <span id="lws-totalCart">{totalCart?.length ? totalCart?.length : 0}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;