import { combineReducers } from 'redux';

import episodes from './reducer-episodes.js';
import nowPlaying from './reducer-selected-episode.js';
import displayMode from './reducer-ui-state.js';
import showNavMenu from './reducer-nav-menu.js';

const app = combineReducers({
  episodes,
  nowPlaying,
  displayMode,
  showNavMenu,
});

export default app;
