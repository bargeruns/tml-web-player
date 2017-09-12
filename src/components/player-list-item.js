import React from 'react';

import './player-list-item.css';

const playerListItem = ({episode}) => {
  return (
    <div className="list-item">
      <div className="play-button">
        <i className="fa fa-play-circle-o fa-2x"></i>
      </div>
      <p>{episode.title}</p>
    </div>
  );
}

export default playerListItem;