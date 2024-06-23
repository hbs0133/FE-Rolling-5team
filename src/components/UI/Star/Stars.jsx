import React from "react";
import Star from "./Star";
import "./Star.css";

const Stars = ({ count }) => {
  const { innerWidth, innerHeight } = window;

  const getStarPosition = (size) => {
    const maxLeft = innerWidth - size;
    const maxTop = innerHeight - size;
    return {
      left: Math.random() * maxLeft,
      top: Math.random() * maxTop,
    };
  };
  const stars = Array.from({ length: count }, (_, index) => {
    const size = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    const position = getStarPosition(size);
    return {
      size,
      ...position,
    };
  });

  const handleAnimationEnd = (event) => {
    event.target.remove();
  };

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <Star
          key={index}
          size={star.size}
          left={star.left}
          top={star.top}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </div>
  );
};

export default Stars;
