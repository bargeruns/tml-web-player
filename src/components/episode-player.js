import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFirstFromObject } from '../utils';
import './episode-player.css';
import NavButton from '../containers/nav-menu-button.js';

class EpisodePlayer extends Component {
  returnEpisode(props) {
    if (props.nowPlaying) {
      return props.episodes[props.nowPlaying];
    } else {
      return getFirstFromObject(props.episodes);
    }
  }

  render() {
    if (_.isEmpty(this.props.episode)) {
      return <h2>Loading Episode...</h2>
    }

    const episode = this.returnEpisode(this.props);
    const audioUrl = episode.enclosure.url;
    const artworkUrl = _.get(episode, 'itunes:image.href');
    const title = episode.title;
    const subtitle = episode['itunes:subtitle'];
    const { displayMode } = this.props;

    const renderMenuButton = (displayMode) => {
      if (displayMode === 'mobile') {
        return <NavButton />;
      }
      return null;
    };

    return (
      <div className="card">
        <div className="card-image">
          {renderMenuButton(displayMode)}
          <figure className="image episode-artwork">
            <img src={artworkUrl} alt=""/>
          </figure>
        </div>
        <div className="card-content">
          <p className="episode-title">{title}</p>
          <div className="media">
            <div className="media-content">
              <audio src={audioUrl} controls></audio>
            </div>
          </div>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    nowPlaying: state.nowPlaying,
    displayMode: state.displayMode,
  }
}

export default connect(mapStateToProps)(EpisodePlayer);

