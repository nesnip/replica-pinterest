import React from 'react';

const Item = ({ url, description }) => (
  <div className="item-container">
    <img src={url} alt={description} className="item-image" />
  </div>
);

export default Item;
