import React from 'react';

const Item = ({ url, description, title }) => (
  <div className="item-container">
    <img src={url} alt={description} className="item-image" title={title} />
  </div>
);

export default Item;
