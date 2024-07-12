import { ADDPRODUCT, ADDTOCART, DELETEFROMCART, MINUSQUANTITYINCART, PLUSQUANTITYINCART } from './actionTypes';

export const addProduct = (data) => {
    return {
        type: ADDPRODUCT,
        payload: data
    }
};

export const addToCart = (data) => {
    return {
        type: ADDTOCART,
        payload: data
    }
};

export const plusQuantityFromCart = (data) => {
    return {
        type: PLUSQUANTITYINCART,
        payload: data
    }
}

export const minusQuantityFromCart = (data) => {
    return {
        type: MINUSQUANTITYINCART,
        payload: data
    }
}

export const deleteFromCart = (data) => {
    return {
        type: DELETEFROMCART,
        payload: data
    }
}