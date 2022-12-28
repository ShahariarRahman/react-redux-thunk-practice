import { addProduct } from "../../actions/productActions";

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://moontech-api.onrender.com/product", {
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