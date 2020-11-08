import React from 'react';
import PropTypes from 'prop-types';

export default function ProductHeader({ title, category, subCategory, price }) {
    const categoryString = `${category.toUpperCase()} | ${subCategory.toUpperCase()}`;
    const averagePrice = `Average price: ${price}`;

    return (
        <div className="productDetail_header">
            <h1>{ title }</h1>
            <div className="productDetail_category">
                <span>{ categoryString }</span>
            </div>
            <div className="productDetail_price">
                <span>{ averagePrice }</span>
            </div>
        </div>
    );
}

ProductHeader.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};
