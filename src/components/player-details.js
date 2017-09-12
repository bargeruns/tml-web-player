import React from 'react';
import _ from 'lodash';

import './player-details.css';

const playerDetails = ({episode}) => {
  if (!episode) {
    return <h2>Loading...</h2>;
  }

  const audioUrl = episode.enclosure.url;

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">Episode {episode.title}</p>
      </div>
      <div className="card-image">
        <figure className="image episode-artwork">
          <img src={episode['itunes:image'].href} alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <audio src={audioUrl} controls></audio>
          </div>
        </div>
        {episode['itunes:subtitle']}
      </div>
    </div>
  );
}

export default playerDetails;