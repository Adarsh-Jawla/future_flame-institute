import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Empty stars
    while (stars.length < 5) {
        stars.push(<FaStar key={stars.length} className="text-gray-300" />);
    }

    return <div className="flex items-center">{stars.map((star, index) => <span key={index}>{star}</span>)}</div>;
};

export default StarRating;
