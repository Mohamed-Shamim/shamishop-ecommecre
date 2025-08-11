import React from 'react'

const StarReviewsRating = ({ rating, hoverRating, onRate, onHover }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className={`text-2xl ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'} `}
                    onClick={() => onRate(star)}
                    onMouseEnter={() => onHover(star)}
                    onMouseLeave={() => onHover(0)}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default StarReviewsRating