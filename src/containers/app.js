import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEpisodes } from '../actions';
import Navbar from '../components/navbar';
import Player from './player';
import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchEpisodes();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Player episodes={this.props.episodes} selectedEpisode={this.props.selectedEpisode} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
    selectedEpisode: state.selectedEpisode
  }
}

export default connect(mapStateToProps, { fetchEpisodes })(App);
