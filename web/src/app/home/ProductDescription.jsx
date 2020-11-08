import React from 'react';
import PropTypes from 'prop-types';

export default function ProductDescription({ summary, image, description }) {
    const paragraphs = description.map((d) => <p key={d}>{d}</p>);

    return (
        <div>
            <div className="productDetail_summary">
                <p>{ summary }</p>
            </div>
            <img className="productDetail_image" src={`/api/cdn/${image}`} alt="Product" />
            <div className="productDetail_description">
                { paragraphs }
            </div>
        </div>
    );
}

ProductDescription.propTypes = {
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
};
