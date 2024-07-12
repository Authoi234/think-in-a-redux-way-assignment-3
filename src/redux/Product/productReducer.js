import { ADDPRODUCT, ADDTOCART, DELETEFROMCART, MINUSQUANTITYINCART, PLUSQUANTITYINCART } from "./actionTypes";

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
            const productFromProducts = state.products.find(item => item.id === action.payload.id);
            const isAlreadyInCart = state.cart.some((item) => item.id === productFromProducts.id);

            if (isAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map(item => item.id === productFromProducts.id ? { ...item, quantity: Number(item.quantity) - 1 } : item),
                    cart: state.cart.map(item => item.id === productFromProducts.id ? { ...item, quantity: Number(item.quantity) + 1, totalPrice: (Number(item.quantity) + 1) * Number(item.price) } : item)
                }
            }
            return {
                ...state,
                products: state.products.map(item => item.id === productFromProducts.id ? { ...item, quantity: Number(item.quantity) - 1, totalPrice: (Number(item.price)) } : item),
                cart: [
                    ...state.cart,
                    { ...action.payload, quantity: 1, totalPrice: action.payload.price },

                ]
            };

        case PLUSQUANTITYINCART:
            const productToPlusQuantity = state.products.find(item => item.id === action.payload.id);

            return {
                ...state,
                products: state.products.map(item => item.id === productToPlusQuantity.id ? {...item, quantity: Number(item.quantity) - 1} : item),
                cart: state.cart.map(item => item.id === productToPlusQuantity.id ? {...item, quantity: Number(item.quantity) + 1, totalPrice: (Number(item.quantity) + 1) * Number(item.price)} : item)              
            }

        case MINUSQUANTITYINCART:
            const productToMinusQuantity = state.products.find(item => item.id === action.payload.id);
            
            return {
                ...state,
                products: state.products.map(item => item.id === productToMinusQuantity.id ? {...item, quantity: Number(item.quantity) + 1} : item),
                cart: state.cart.map(item => item.id === productToMinusQuantity.id ? {...item, quantity: Number(item.quantity) - 1, totalPrice: (Number(item.quantity) - 1) * Number(item.price)} : item)              
            }
        
        case DELETEFROMCART: 
            const product = state.products.find(item => item.id === action.payload.id);
            const newCart = state.cart.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                products: state.products.map(item => item.id === product.id ? {...item, quantity: Number(item.quantity) + Number(action.payload.quantity)} : item),
                cart: newCart
            }

        default:
            return state;
    }
};

export default productReducer;