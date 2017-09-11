import React from 'react';
import _ from 'lodash';

const playerDetails = ({episode}) => {
  if (!episode) {
    return <h2>Loading...</h2>;
  }

  const audioUrl = episode.enclosure.url;

  return (
    <div>
      <img src="http://placehold.it/150x150" alt=""/>
      <audio src={audioUrl} controls></audio>
      <p>{episode['itunes:subtitle']}</p>
    </div>
  );
}

export default playerDetails;