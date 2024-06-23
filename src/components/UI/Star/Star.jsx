import React from "react";
import "./Star.css";
import smileStar from "../../../assets/icons/smile-star.svg";

const Star = ({ size, left, top }) => {
  const style = {
    width: size,
    height: size,
    left: left,
    top: top,
  };

  const handleAnimationEnd = (event) => {
    event.target.remove();
  };

  return (
    <div className="box" style={style} onAnimationEnd={handleAnimationEnd}>
      <img className="star" style={style} src={smileStar} alt="Smile Star" />
    </div>
  );
};

export default Star;
