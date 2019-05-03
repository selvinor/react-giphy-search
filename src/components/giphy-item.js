import React from 'react';

const GifItem = (item) => {
  return (
    <li key={item.id}>
      <img src={item.gif.url} alt="giphy item" />
    </li>
  )
};

export default GifItem;