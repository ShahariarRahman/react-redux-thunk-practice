const initialState = {
    filters: {
        brand: [],
        stock: false,
    },
    keyword: "",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default filterReducer;