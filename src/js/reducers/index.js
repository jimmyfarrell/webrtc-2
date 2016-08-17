import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ routing: routerReducer, test });

function test(state = {}, action){
  if(action.type === "TEST") {
    console.log(state);
    return Object.assign({}, state, {
      chatId: action.chatId
    })
  }
  return state;
}

export default rootReducer;
