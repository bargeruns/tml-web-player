import React, { Component } from 'react';

import './player-list.css';
import PlayerListItem from './player-list-item';

export default class PlayerList extends Component {
  renderList() {
    return this.props.episodes.map(episode => {
      return <PlayerListItem episode={episode} />
    });
  }

  render() {
    return (
      <div className="list-container">
        {this.renderList()}
      </div>
    );
  }
}

