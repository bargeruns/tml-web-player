import { SELECT_EPISODE } from '../actions';

const selectedEpisode = (state = '', action) => {
  switch (action.type) {
  case SELECT_EPISODE:
    return action.title;
  default:
    return state;
  }
};

export default selectedEpisode;
