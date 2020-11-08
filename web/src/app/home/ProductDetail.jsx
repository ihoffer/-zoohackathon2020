import React from 'react';
import PropTypes from 'prop-types';
import SimilarProductCarousel from './SimilarProductCarouselContainer';
import ProductHeader from './ProductHeader';
import ProductDescription from './ProductDescription';
import ProductClassification from './ProductClassification';
import ProductHighlight from './ProductHighlight';

export default function ProductDetail({ detail }) {
    return (
        <div className="productDetail">
            <ProductHighlight rating={parseFloat(detail.rating)} subCategory={detail.subCategory} />
            <ProductHeader
                title={detail.title}
                category={detail.category}
                subCategory={detail.subCategory}
                price={detail.price}
            />
            <ProductClassification classifications={detail.classifications} />
            <ProductDescription summary={detail.summary} image={detail.image} description={detail.description} />
            <SimilarProductCarousel />
        </div>
    );
}

ProductDetail.propTypes = {
    detail: PropTypes.object.isRequired,
};
