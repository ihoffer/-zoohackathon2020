import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default function SimilarProductCarousel({ products }) {
    const items = products.map((p) => <li key={p.docId}><ProductCard detail={p} /></li>);
    return (
        <div>
            <h2>Alternative products</h2>
            <div className="carousel">
                <ul>
                    { items }
                </ul>
            </div>
        </div>

    );
}

SimilarProductCarousel.propTypes = {
    products: PropTypes.array.isRequired,
};
