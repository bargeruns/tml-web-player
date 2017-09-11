import React, { Component } from 'react';

import PlayerDetails from './PlayerDetails';

export default class Player extends Component {
  render() {
    const { episodes, selectedEpisode } = this.props;
    return (
      <PlayerDetails episode={episodes[0]} />
    );
  }
}