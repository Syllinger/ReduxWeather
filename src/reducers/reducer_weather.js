import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //Vanilla JS
      //return state.concat([action.payload.data]);
      //ES2015 variant below
      return [action.payload.data, ...state];
  }
  
  return state;
}