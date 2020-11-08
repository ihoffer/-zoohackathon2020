import React from 'react';
import '../../assets/styles.css';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetailContainer';

export default function Content({ isLoaded, isLoading, getProductDetail, getSimilarProducts }) {
    if (!isLoaded && !isLoading) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        getProductDetail(urlParams.get('barcode'));
        getSimilarProducts(urlParams.get('barcode'));
    }

    if (isLoaded) {
        return <ProductDetail />;
    }

    return (<span />);
}

Content.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    getProductDetail: PropTypes.func.isRequired,
    getSimilarProducts: PropTypes.func.isRequired,
};
