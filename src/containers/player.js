import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEpisodes, selectEpisode } from '../actions';
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

  renderEpisodePlayer() {
    if (_.isEmpty(this.props.episodes)) {
      return <h2>Loading Episode...</h2>;
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
          <div className="column">
            <EpisodeList
              episodes={this.props.episodes}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    selectedEpisode: state.selectedEpisode,
    displayMode: state.displayMode,
  };
}

export default connect(mapStateToProps, { fetchEpisodes, selectEpisode })(Player);

