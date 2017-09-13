import React from 'react';

import './player-list-item.css';

const playerListItem = ({episode}) => {
  return (
    <li className="episode-list-item">
      <p>{episode.title}</p>
      <i className="fa fa-play-circle fa-2x"></i>
    </li>
  );
}

export default playerListItem;
