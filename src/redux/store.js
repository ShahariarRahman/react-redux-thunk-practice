import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import cartCounter from "./middleware/cartCounter";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, cartCounter)),
);

export default store;