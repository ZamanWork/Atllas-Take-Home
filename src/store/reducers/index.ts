import { combineReducers } from 'redux';
import {agentsReducer} from './agentsReducer';

const rootReducer = combineReducers({
  agent: agentsReducer,
});

export default rootReducer;