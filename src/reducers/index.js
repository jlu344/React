import {combineReducers} from 'redux';
import courses from './courseReducer';
import test from './testReducer';

const rootReducer = combineReducers({
    courses : courses,
    test : test
});

export default rootReducer;
