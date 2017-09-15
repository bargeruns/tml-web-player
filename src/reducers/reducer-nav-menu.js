import { TOGGLE_NAV_MENU } from '../actions';

const showNavMenu = (state = false, action) => {
  switch (action.type) {
  case TOGGLE_NAV_MENU:
    return action.open;
  default:
    return state;
  }
};

export default showNavMenu;
