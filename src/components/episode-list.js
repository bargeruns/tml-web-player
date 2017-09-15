import _ from 'lodash';
import React from 'react';

import './episode-list.css';

const renderEpisodeItem = (episode) => {
  return (
    <li className="episode-list-item" key={episode.title}>
      <p>{episode.title}</p>
      <i className="fa fa-play-circle fa-2x"></i>
    </li>
  );
}

const episodeList = ({ episodes }) => {
  if (_.isEmpty(episodes)) {
    return (
      <ul className="card episode-list">
        <li>Loading Latest Episodes...</li>
      </ul>
    );
  }

  return (
    <ul className="card episode-list">
      {_.map(episodes, renderEpisodeItem)}
    </ul>
  );
}

export default episodeList;
