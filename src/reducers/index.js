import { combineReducers } from 'redux';

import BedsReducer from './reducer_beds';

import RoomsReducer from './reducer_rooms';

import FloorsReducer from './reducer_floors';

import ReducersMonitoring from './reducers_monitoring';


const rootReducer = combineReducers({
  beds: BedsReducer,

  rooms: RoomsReducer,
  
  floors: FloorsReducer,

  cloudSensorMonitor: ReducersMonitoring
});

export default rootReducer;
