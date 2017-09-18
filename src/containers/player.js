import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEpisodes, setNowPlaying } from '../actions';
import EpisodePlayer from '../components/episode-player';
import EpisodeList from '../components/episode-list';
import './player.css';

function getFirstFromObject(object) {
  const keys = Object.keys(object);
  return object[keys[0]];
}

class Player extends Component {
  componentDidMount() {
    this.props.fetchEpisodes();
  }

  renderEpisodeList() {
    if (this.props.displayMode === 'desktop') {
      return (
        <div className="column">
          <EpisodeList
            episodes={this.props.episodes}
            setNowPlaying={this.props.setNowPlaying}
          />
        </div>
      );
    }
  }

  renderEpisodePlayer() {
    if (_.isEmpty(this.props.episodes)) {
      return (
        <div className="card">
          <h2>Loading Latest Episode...</h2>
        </div>
      )
    }

    return (
      <EpisodePlayer
        episode={this.props.nowPlaying || getFirstFromObject(this.props.episodes)}
        showNavButton={this.props.displayMode === 'mobile'}
      />
    );
  }

  render() {
    return(
      <section className="container">
        <div className="columns">
          <div className="column">
            {this.renderEpisodePlayer()}
          </div>
          {this.renderEpisodeList()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    nowPlaying: state.nowPlaying,
    displayMode: state.displayMode,
  };
}

export default connect(mapStateToProps, { fetchEpisodes, setNowPlaying })(Player);

