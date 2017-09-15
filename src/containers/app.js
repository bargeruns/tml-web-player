import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEpisodes, setDisplayMode } from '../actions';
import NavMenuButton from './nav-menu-button.js';
import Player from './player';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.setMobileDisplay = this.setMobileDisplay.bind(this);
  }

  setMobileDisplay() {
    if (window.innerWidth <= 768) {
      return this.props.setDisplayMode('mobile');
    } else {
      return this.props.setDisplayMode('desktop');
    }
  }

  componentDidMount() {
    this.props.fetchEpisodes();

    if (window.innerWidth > 768) {
      this.props.setDisplayMode('desktop');
      window.addEventListener('resize', this.setMobileDisplay);
    }
  }

  renderMenuButton() {
    if (this.props.displayMode === 'desktop') {
      return <NavMenuButton />;
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        {this.renderMenuButton()}
        <Player episodes={this.props.episodes} selectedEpisode={this.props.selectedEpisode} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    selectedEpisode: state.selectedEpisode,
    displayMode: state.displayMode
  };
};

export default connect(mapStateToProps, { fetchEpisodes, setDisplayMode })(App);
