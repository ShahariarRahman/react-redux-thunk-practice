import { removeProduct } from "../../actions/productActions";

const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeProduct(id));
        };
    };
};

export default deleteProduct;