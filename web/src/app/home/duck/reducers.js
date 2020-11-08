const initialState = {
    data: {},
    similarProducts: [],
    isLoading: false,
    isLoaded: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_DETAIL_REQUESTED': {
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
            };
        }
        case 'PRODUCT_DETAIL_RECEIVED': {
            const { payload } = action;
            return {
                ...state,
                data: payload,
                isLoading: false,
                isLoaded: true,
            };
        }
        case 'SIMILAR_PRODUCTS_RECEIVED': {
            const { payload } = action;
            return {
                ...state,
                similarProducts: payload,
            };
        }
        default:
            return state;
    }
}
