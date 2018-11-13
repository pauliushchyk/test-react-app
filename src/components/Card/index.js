import React from 'react';

import './index.css';
import { BYNFormatter, USDFormatter } from '../../utils/formatters';

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
        <span className="card__price">{BYNFormatter.format(ad.price_byn)}</span>
        <span className="card__price card__price--small">
          {USDFormatter.format(ad.price_usd)}
        </span>
      </div>
    </div>
  </div>
);
