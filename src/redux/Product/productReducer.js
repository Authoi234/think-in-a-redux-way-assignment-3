import { ADDPRODUCT } from "./actionTypes";

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

        default:
            return state;
    }
};

export default productReducer;