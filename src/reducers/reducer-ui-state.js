import { SET_DISPLAY_MODE } from '../actions';

const displayMode = (state = 'mobile', action) => {
  switch(action.type) {
  case SET_DISPLAY_MODE:
    return action.displayMode;
  default:
    return state;
  }
};

export default displayMode;
