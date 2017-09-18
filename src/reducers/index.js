import { combineReducers } from 'redux';

import episodes from './reducer-episodes.js';
import nowPlaying from './reducer-selected-episode.js';
import displayMode from './reducer-ui-state.js';
import showNavMenu from './reducer-nav-menu.js';
import showMobilePicker from './reducer-mobile-picker.js';

const app = combineReducers({
  episodes,
  nowPlaying,
  displayMode,
  showNavMenu,
  showMobilePicker,
});

export default app;
