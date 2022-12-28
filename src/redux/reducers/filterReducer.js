import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keyword: "",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            const selectedBrand = state.filters.brands.includes(action.payload);
            if (selectedBrand) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: state.filters.brands.filter(brand => brand !== action.payload),
                    },
                };
            };
            return {
                ...state,
                filters: {
                    ...state.filters, brands: [
                        ...state.filters.brands, action.payload
                    ],
                },
            };
        case TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock,
                },
            };
        default:
            return state;
    };
};

export default filterReducer;