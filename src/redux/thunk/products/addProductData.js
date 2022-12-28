import { addProduct } from "../../actions/productActions";

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addProduct({
                _id: data.insertedId,
                ...product,
            }));
        };
    };
};

export default addProductData;