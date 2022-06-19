import React from 'react';
import './Point.css';

const Point = ({ title, text }) => (
  <div className="nullpi__points-container__point">
    <div className="nullpi__points-container__point-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="nullpi__points-container_point-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Point;