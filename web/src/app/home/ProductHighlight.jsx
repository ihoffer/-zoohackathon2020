import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/all';
import ClassificationBar from './ClassificationBar';
import { sad, happy, worried } from './duck/moodAnimals';

export default function ProductHighlight({ rating, subCategory }) {
    let animal = sad[Math.floor(Math.random() * sad.length)];
    let text = `Oh no! This ${subCategory.toLowerCase()} seriously harms animals like ${animal.animalName} 
the ${animal.animalType}. Please help ${animal.animalName} and the planet and look for an alternative!`;
    if (rating >= 80) {
        animal = happy[Math.floor(Math.random() * happy.length)];
        text = `Congrats! This ${subCategory.toLowerCase()} protects ${animal.animalName} and its 
natural habitat, what a deal! Well done you!`;
    } else if (rating >= 50) {
        animal = worried[Math.floor(Math.random() * worried.length)];
        text = `You can do better! This ${subCategory.toLowerCase()} causes more harm than good to animals like 
${animal.animalName} the ${animal.animalType}, perhaps you can cheer up ${animal.animalName} and find a better deal?`;
    }
    return (
        <div>
            <div className="productDetail_highlight">
                <div className="productDetail_highlight-text">
                    <span>{ text }</span>
                </div>
                <div className="productDetail_highlight-animal">
                    <img src={`/api/cdn/${animal.animalImage}`} alt="Mood Animal" width={150} height={150} />
                </div>
            </div>
            <div className="productDetail_highlight-rating">
                <div>
                    <span>EtikBuy Rating:</span>
                </div>
                <ClassificationBar rating={rating} />
                <a href="/our_rating.html" aria-label="Details"><FaInfoCircle /></a>
            </div>
        </div>
    );
}

ProductHighlight.propTypes = {
    rating: PropTypes.number.isRequired,
    subCategory: PropTypes.string.isRequired,
};
