import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default fuction(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
  }
  return state;
}

funciton setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}
