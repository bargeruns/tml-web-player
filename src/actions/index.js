import axios from 'axios';

export const FETCH_EPISODES = 'FETCH_EPISODES';
export const SELECT_EPISODE = 'SELECT_EPISODE';
export const SET_DISPLAY_MODE = 'SET_DISPLAY_MODE';
export const TOGGLE_MOBILE_PICKER = 'TOGGLE_MOBILE_PICKER';
export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';

const API_URL = 'https://tml-feeder.herokuapp.com/api/v1/tml';

export function fetchEpisodes() {
  const req = axios.get(API_URL);
  return {
    type: FETCH_EPISODES,
    payload: req
  };
}

export function setNowPlaying(title) {
  return {
    type: SELECT_EPISODE,
    title
  };
}

export function setDisplayMode(displayMode) {
  return {
    type: SET_DISPLAY_MODE,
    displayMode
  };
}

export function toggleNavMenu(open) {
  return {
    type: TOGGLE_NAV_MENU,
    open
  };
}

export function toggleMobilePicker(status) {
  return {
    type: TOGGLE_MOBILE_PICKER,
    status
  };
}
