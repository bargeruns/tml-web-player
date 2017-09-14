import React, { Component } from 'react';

import './episode-list.css';

export default class EpisodeList extends Component {
  renderList() {
    return this.props.episodes.map(episode => {
      return (
        <li className="episode-list-item" id={episode.title}>
          <p>{episode.title}</p>
          <i className="fa fa-play-circle fa-2x"></i>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="card episode-list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

