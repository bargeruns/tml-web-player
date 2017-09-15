import { combineReducers } from 'redux';

import episodesReducer from './reducer-episodes.js';
import selectedEpisode from './reducer-selected-episode.js';

const app = combineReducers({
  episodes: episodesReducer,
  nowPlaying: selectedEpisode
});

export default app;
