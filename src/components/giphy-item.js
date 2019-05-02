import React from 'react';

const GiphyItem = (item) => {
  return (
    <li>
      <img src={item.gif.url} alt="giphy item" />
    </li>
  )
};

export default GiphyItem;