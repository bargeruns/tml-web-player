import { TOGGLE_MOBILE_PICKER } from '../actions';

const showMobilePicker = (state = false, action) => {
  switch(action.type) {
  case TOGGLE_MOBILE_PICKER:
    return action.status;
  default:
    return state;
  };
};

export default showMobilePicker;
