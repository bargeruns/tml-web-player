import axios from 'axios';
import React, { Component } from 'react';

import Player from './Player';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      selectedEpisode: 0,
    }
  }

  componentDidMount() {
    this.fetchEpisodes();
  }

  fetchEpisodes() {
    return axios
      .get('https://tml-feeder.herokuapp.com/api/v1/tml')
      .then(response => {
        this.setState({
          episodes: response.data,
        });
      })
      .catch(error => {
        console.log('Error fetching episodes: ' + error.toString());
      });
  }

  render() {
    return (
      <div className="App">
        <Player episodes={this.state.episodes} selectedEpisode={this.state.selectedEpisode} />
      </div>
    );
  }
}

export default App;
