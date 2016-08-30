import update from 'react-addons-update';
import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action){
    switch (action.type){
    case actionTypes.CREATE_COURSE:
      return update(state, {$push: [action.course]});
    case actionTypes.REMOVE_COURSE :
      return update(state, {$splice: [[action.index, 1]]});
    case actionTypes.LOAD_COURSES_SUCCESS :
      return action.courses;
    default:
      return state;
  }
}
