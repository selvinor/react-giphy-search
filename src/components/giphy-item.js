import React from 'react';

const GifItem = (item) => {
  console.log('ITEM: ', item);
  return (
    <li key={item.id}>
      <img src={item.gif} alt="giphy item" />
    </li>
  )
};

export default GifItem;