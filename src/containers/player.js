import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEpisodes, selectEpisode } from '../actions';
import EpisodeDetails from '../components/episode-details';
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

  renderEpisodeDetails() {
    if (_.isEmpty(this.props.episodes)) {
      return <h2>Loading Episode...</h2>;
    }

    return (
      <EpisodeDetails
        episode={this.props.nowPlaying || getFirstFromObject(this.props.episodes)}
      />
    );
  }

  render() {
    return(
      <section className="container">
        <div className="columns">
          <div className="column">
            {this.renderEpisodeDetails()}
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
    selectedEpisode: state.selectedEpisode
  }
}

export default connect(mapStateToProps, { fetchEpisodes, selectEpisode })(Player);

