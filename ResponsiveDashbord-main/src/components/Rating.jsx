import React, { useState } from 'react';
import './StarRating.css'; 


const Rating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {


    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (value) => {
        setHoverRating(value);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (value) => {
        setRating(value);
        if (onRatingChange) {
            onRatingChange(value);
        }
    };

    const getStarClass = (index) => {
        if (hoverRating >= index + 1 || rating >= index + 1) {
            return 'star filled';
        }
        return 'star';
    };

    return (
        <>

            <div className="star-rating">
                {[...Array(totalStars)].map((_, index) => (
                    <span
                        key={index}
                        className={getStarClass(index)}
                        onMouseEnter={() => handleMouseEnter(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index + 1)}
                    >
                        ★
                    </span>
                ))}
            </div>

        </>
    )
}

export default Rating
