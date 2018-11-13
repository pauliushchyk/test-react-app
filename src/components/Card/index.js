import React from 'react';

import './index.css';

export const Card = ({ ad }) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(https://content.kufar.by/line_thumbs_2x/${ad.images[0].id.substring(
        0,
        2,
      )}/${ad.images[0].id}.jpg)`,
    }}
  >
    <div className="card__content">
      <h2 className="card__title">{ad.subject}</h2>
      <div className="card__prices">
        <span className="card__price">{ad.price_byn}р</span>
        <span className="card__price card__price--small">${ad.price_usd}</span>
      </div>
    </div>
  </div>
);
