import _ from 'lodash';

import { FETCH_EPISODES } from '../actions';

const episodes = (state = {}, action) => {
  switch (action.type) {
  case FETCH_EPISODES:
    console.log(action.payload.data);
    return Object.assign({}, state, _.mapKeys(action.payload.data, 'title'));
  default:
    return state;
  }
};

export default episodes;
