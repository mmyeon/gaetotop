import React from "react";
import "./DogAnimation.scss";

const DogAnimation = () => {
  return (
    <div className="dog_animation">
      <div className="dog">
        <div className="body">
          <div className="leg leg1"></div>
          <div className="leg leg2"></div>
          <div className="leg leg3"></div>
          <div className="leg leg4"></div>
          <div className="tail"></div>
          <div className="ear"></div>
          <div className="nose"></div>
          <div className="eye"></div>
          <div className="tongue"></div>
        </div>
      </div>
    </div>
  );
};

export default DogAnimation;
