
export function handleRideRouting(state, action) {
  switch (action.type) {
    case 'SET_MATCH_LOCATION':
      return setMatchLocation(state, action);
    case 'SET_DIRECTIONS':
      return setDirections(state, action);
  }

  return state;
};

function setMatchLocation(state, { entry }) {
  let updates = {
    location: entry,
  };

  return state.mergeIn(['match'], updates);
}

function setDirections(state, { entry }) {
  let updates = {
    directions: entry,
  };

  return state.merge(updates);
}
