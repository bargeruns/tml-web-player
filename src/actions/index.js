import axios from 'axios';

export const FETCH_EPISODES = 'FETCH_EPISODES';
export const SELECT_EPISODE = 'SELECT_EPISODE';

const API_URL = 'https://tml-feeder.herokuapp.com/api/v1/tml';

export function fetchEpisodes() {
  const req = axios.get(API_URL);
  return {
    type: FETCH_EPISODES,
    payload: req
  };
}

export function selectEpisode(title) {
  return {
    type: SELECT_EPISODE,
    title
  };
}
