import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Star Rating</h1>
        <p className="text-gray-500 dark:text-gray-400">Rate your experience.</p>
      </div>

      <div className="flex gap-2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={`
                text-4xl cursor-pointer transition-all duration-200 transform hover:scale-110
                ${index <= (hover || rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
              `}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>

      <div className="h-8 text-lg font-medium text-gray-700 dark:text-gray-300">
        {rating > 0 && (
          <span className="animate-in fade-in slide-in-from-bottom-2">
            You rated this <span className="text-yellow-500 font-bold">{rating}</span> out of {noOfStars} stars.
          </span>
        )}
      </div>

      <button
        onClick={() => {
          setRating(0);
          setHover(0);
        }}
        className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
      >
        Reset Rating
      </button>
    </div>
  );
};

export default StarRating;
