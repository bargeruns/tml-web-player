import React, { Component } from 'react';

import EpisodeDetails from '../components/episode-details';
import EpisodeList from '../components/episode-list';
import './player.css';

export default class Player extends Component {
  render() {
    const { episodes, selectedEpisode } = this.props;
    return (
      <section className="container">
        <div className="columns">
          <div className="column">
            <EpisodeDetails episode={episodes[selectedEpisode]} />
          </div>
          <div className="column">
            <EpisodeList episodes={episodes} />
          </div>
        </div>
      </section>
    );
  }
}
