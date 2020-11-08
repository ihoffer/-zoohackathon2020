import { fetchProductDetail, fetchSimilarProducts } from './api';

const productDetailRequested = () => ({ type: 'PRODUCT_DETAIL_REQUESTED' });

const productDetailReceived = (payload) => ({ type: 'PRODUCT_DETAIL_RECEIVED', payload });

const productDetailRequestFailed = () => ({ type: 'PRODUCT_DETAIL_REQUEST_FAILED' });

const similarProductRequested = () => ({ type: 'SIMILAR_PRODUCTS_REQUESTED' });

const similarProductsReceived = (payload) => ({ type: 'SIMILAR_PRODUCTS_RECEIVED', payload });

const similarProductsRequestFailed = () => ({ type: 'SIMILAR_PRODUCTS_REQUEST_FAILED' });

export function getProductDetail(barcode) {
    return (dispatch) => {
        dispatch(productDetailRequested());
        fetchProductDetail(barcode)
            .then((response) => {
                dispatch(productDetailReceived(response.data));
            })
            .catch(() => {
                dispatch(productDetailRequestFailed());
            });
    };
}

export function getSimilarProducts(barcode) {
    return (dispatch) => {
        dispatch(similarProductRequested());
        fetchSimilarProducts(barcode)
            .then((response) => {
                dispatch(similarProductsReceived(response.data));
            })
            .catch(() => {
                dispatch(similarProductsRequestFailed());
            });
    };
}
