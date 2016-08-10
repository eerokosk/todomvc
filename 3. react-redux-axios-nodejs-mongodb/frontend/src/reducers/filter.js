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

var filterInitialState = {
  filter: getFilter()
};

export default function(state = filterInitialState, action) {
  switch(action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filter: getFilter()
      });
    default:
      return state;
  }
}
