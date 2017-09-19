import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleMobilePicker, setNowPlaying } from '../actions';
import { getFirstFromObject } from '../utils';
import './episode-player.css';
import EpisodePicker from './episode-picker.js';
import NavButton from '../containers/nav-menu-button.js';

class EpisodePlayer extends Component {
  constructor(props) {
    super(props);

    this.showEpisodePicker = false;
    this.setNowPlaying = this.setNowPlaying.bind(this);
  }

  returnEpisode(props) {
    if (props.nowPlaying) {
      return props.episodes[props.nowPlaying];
    } else {
      return getFirstFromObject(props.episodes);
    }
  }

  setNowPlaying(title) {
    this.props.setNowPlaying(title);
    this.props.toggleMobilePicker(false);
  }

  renderEpisodePicker() {
    if (this.props.displayMode === 'mobile') {
      return (
        <EpisodePicker
          episodes={this.props.episodes}
          nowPlaying={this.props.nowPlaying}
          setNowPlaying={this.setNowPlaying}
          shouldShowPicker={this.props.showMobilePicker}
          togglePicker={this.props.toggleMobilePicker}
        />
      );
    }
  }

  render() {
    if (_.isEmpty(this.props.episode)) {
      return (
        <div className="card">
          <h2>Loading Latest Episode...</h2>
        </div>
      );
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
        {this.renderEpisodePicker()}
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
    showMobilePicker: state.showMobilePicker,
  }
}

export default connect(mapStateToProps, { toggleMobilePicker, setNowPlaying })(EpisodePlayer);

