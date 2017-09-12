import React, { Component } from 'react';

import PlayerDetails from '../components/player-details';
import PlayerList from '../components/player-list';
import './player.css';

export default class Player extends Component {
  render() {
    const { episodes, selectedEpisode } = this.props;
    return (
      <section className="container">
        <div className="columns container">
          <div className="column container">
            <PlayerDetails episode={episodes[selectedEpisode]} />
          </div>
          <div className="column container">
            <PlayerList episodes={episodes} />
          </div>
        </div>
      </section>
    );
  }
}