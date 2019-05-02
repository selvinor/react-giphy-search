import React from 'react';
import GiphyItem from './giphy-item';

const GiphyList = (props) => {
  // create array to hold the list of gifs
  const giphyItems = props.gifs.map((item) => {
    return <GiphyItem key={item.id} gif={item} />
  });

  return (
    <ul>{giphyItems}</ul>
  );

};
export default GiphyList;