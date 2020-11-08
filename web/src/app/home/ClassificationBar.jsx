import React from 'react';
import PropTypes from 'prop-types';

export default function ClassificationBar({ rating }) {
    let type = 'bg-danger';
    if (rating >= 80) {
        type = 'bg-success';
    } else if (rating >= 50) {
        type = 'bg-warning';
    }
    return (
        <div className="productDetail_rating">
            <div className="progress">
                <div
                    className={`progress-bar ${type}`}
                    role="progressbar"
                    style={{ width: `${rating}%` }}
                    aria-valuenow={rating}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {`${rating}%`}
                </div>
            </div>
        </div>
    );
}

ClassificationBar.propTypes = {
    rating: PropTypes.number.isRequired,
};
