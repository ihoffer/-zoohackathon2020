import axios from 'axios';

export function fetchProductDetail(barcode) {
    return axios({
        method: 'get',
        url: `/api/product_details/${barcode}`,
    });
}

export function fetchSimilarProducts(barcode) {
    return axios({
        method: 'get',
        url: `/api/similar_products/${barcode}`,
    });
}
