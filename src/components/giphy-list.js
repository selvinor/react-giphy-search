import React from 'react';
import GiphyItem from './giphy-item';

const GiphyList = (props) => {
//  create array to hold the list of gifs, map each gif to a giphyItem component and render it.
  const giphyItems = props.gifs.map((item) => {
    return <GiphyItem key={item.id} gif={item} />
  });
  console.log('props: ', props );
  return (
    <div>
      <h2>GIF VIEWER</h2>
      <ul>{giphyItems}</ul>
    </div>
  );



};
export default GiphyList;