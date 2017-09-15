import _ from 'lodash';
import React from 'react';

import './episode-details.css';
import NavButton from '../containers/nav-menu-button.js';

const renderMenuButton = (show) => {
  if (show) {
    return <NavButton />;
  }

  return null;
}

const episodeDetails = ({episode, showNavButton}) => {
  if (_.isEmpty(episode)) {
    return <h2>Loading...</h2>;
  }

  const audioUrl = episode.enclosure.url;
  const artworkUrl = _.get(episode, 'itunes:image.href');
  const title = episode.title;
  const subtitle = episode['itunes:subtitle'];

  return (
    <div className="card">
      <div className="card-image">
        {renderMenuButton(showNavButton)}
        <figure className="image episode-artwork">
          <img src={artworkUrl} alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <p className="episode-title">{title}</p>
        <div className="media">
          <div className="media-content">
            <audio src={audioUrl} controls></audio>
          </div>
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default episodeDetails;

