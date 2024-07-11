import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

const initialState = { products: [], cart: [] };

const nextProductId = (products) => {
    const maxId = products.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    { ...action.payload, id: nextProductId(state.products) }
                ],
                cart: [...state.cart]
            };

        case ADDTOCART:
            const product = state.products.find(item => item.id === action.payload.id);
            const isAlreadyInCart = state.cart.some((item) => item.id === product.id);

            if (isAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1} : item),
                    cart: state.cart.map(item => item.id === product.id ? {...item, quantity : item.quantity + 1} : item)
                }
            }
            return {
                ...state,
                products: state.products.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1} : item),
                cart: [
                    ...state.cart,
                    { ...action.payload, quantity: 1}
                ]
            };

        default:
            return state;
    }
};

export default productReducer;