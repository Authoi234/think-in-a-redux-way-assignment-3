import { ADDPRODUCT, ADDTOCART } from './actionTypes';

export const addProduct = (data) => {
    return {
        type: ADDPRODUCT,
        payload: data
    }
}

export const addToCart = (data) => {
    return {
        type: ADDTOCART,
        payload: data
    }
}