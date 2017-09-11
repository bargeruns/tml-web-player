import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      selectedEpisode: undefined,
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
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <audio src="http://traffic.libsyn.com/themainloop/019-TML.mp3?dest-id=452115" controls></audio>
      </div>
    );
  }
}

export default App;
