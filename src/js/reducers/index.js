import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ routing: routerReducer, isCaller });

function isCaller(state = {}, action) {
  switch (action.type) {
    case 'SET_CALLER':
      return {
        ...state,
        isCaller: action.isCaller
      }
    default:
      return state;
  }
}

export default rootReducer;
