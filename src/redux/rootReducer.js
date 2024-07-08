import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";

const rootReducer = combineReducers({
    products: productReducer
});

export default rootReducer;