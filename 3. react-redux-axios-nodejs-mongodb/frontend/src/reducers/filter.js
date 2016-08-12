import { SET_FILTER } from '../constants/FilterTypes'

const getFilter = function() {
  switch (window.location.pathname) {
    case '/active':
      return false;
    case '/completed':
      return true;
    default:
      return null;
  }
};

var initialState = {
  selected: getFilter()
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_FILTER:
      return {
        selected: getFilter()
      }
    default:
      return state;
  }
}
