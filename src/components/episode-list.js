import _ from 'lodash';
import React from 'react';

import './episode-list.css';

const renderEpisodeItems = (episodes, setNowPlaying) => {
  return _.map(episodes, (episode) => {
    return (
      <li className="episode-list-item" key={episode.title} onClick={() => setNowPlaying(episode.title)}>
        <p>{episode.title}</p>
        <i className="fa fa-play-circle fa-2x"></i>
      </li>
    );

  })
};

const episodeList = ({ episodes, setNowPlaying }) => {
  if (_.isEmpty(episodes)) {
    return (
      <ul className="card episode-list">
        <li>Loading Latest Episodes...</li>
      </ul>
    );
  }

  return (
    <ul className="card episode-list">
      {renderEpisodeItems(episodes, setNowPlaying)}
    </ul>
  );
};

export default episodeList;
