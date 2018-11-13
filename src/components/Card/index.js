import React from 'react';

import './index.css';

export const Card = () => (
  <div
    className="card"
    style={{
      backgroundImage:
        'url(https://content.kufar.by/line_thumbs_2x/68/6840991619.jpg)',
    }}
  >
    <h2 className="card__title">Title</h2>
    <div className="card__prices">
      <span className="card__price">120 809р</span>
      <span className="card__price card__price--small">5 400$</span>
    </div>
  </div>
);
