import { loadProduct } from "../../actions/productAction";

const fetchProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/product');
        const data = await res.json();
        if (data.length) {
            dispatch(loadProduct(data));
        };
    };
};

export default fetchProductData;