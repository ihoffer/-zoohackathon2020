import React from 'react';
import { FaInfoCircle, TiTick, TiTimes } from 'react-icons/all';
import PropTypes from 'prop-types';

export default function ProductClassification({ classifications }) {
    const components = classifications.map((c) => {
        const className = c.satisfies === 'False' ? 'negativeClass' : 'positiveClass';
        const symbol = c.satisfies === 'False' ? <TiTimes /> : <TiTick />;
        return (
            <div className={className} key={c.classification}>
                { symbol }
                <span>{c.classification}</span>
            </div>
        );
    });
    return (
        <div>
            <h2>
                Product classification
                <a href="/our_rating.html" aria-label="Details"><FaInfoCircle /></a>
            </h2>
            <div className="productDetail_classification">
                { components }
            </div>
        </div>
    );
}

ProductClassification.propTypes = {
    classifications: PropTypes.array.isRequired,
};
