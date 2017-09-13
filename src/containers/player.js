import React, { Component } from 'react';

import PlayerDetails from '../components/player-details';
import PlayerList from '../components/player-list';
import './player.css';

export default class Player extends Component {
  render() {
    const { episodes, selectedEpisode } = this.props;
    return (
      <section className="container">
        <div className="columns">
          <div className="column">
            <PlayerDetails episode={episodes[selectedEpisode]} />
          </div>
          <div className="column">
            <PlayerList episodes={episodes} />
          </div>
        </div>
      </section>
    );
  }
}
