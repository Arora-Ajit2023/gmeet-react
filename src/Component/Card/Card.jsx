import React from "react";
import "./Card.css";
const Card = (props) => {
  const { name } = props;
  return (
    <div className="card">
      <div>
        <span className="material-symbols-outlined icon">mic_off</span>
      </div>
      <div className="center">
        <p className="logo">{name[0]}</p>
      </div>
      <div>
        <p className="info">{name}</p>
      </div>
    </div>
  );
};

export default Card;
