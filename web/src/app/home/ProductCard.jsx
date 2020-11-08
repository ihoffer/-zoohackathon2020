import React from 'react';
import PropTypes from 'prop-types';
import ClassificationBar from './ClassificationBar';

export default function ProductCard({ detail }) {
    return (
        <div className="carousel_item">
            <h4><a href={`/product.html?barcode=${detail.docId}`}>{ detail.title }</a></h4>
            <ClassificationBar rating={parseFloat(detail.rating)} />
            <div className="similarProduct_image">
                <img src={`/api/cdn/${detail.image}`} alt="Product" />
            </div>
            <div className="productDetail_price">
                <span>{ detail.price }</span>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    detail: PropTypes.object.isRequired,
};
