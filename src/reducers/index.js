import { combineReducers } from 'redux';

import BedsReducer from './reducer_beds';
import ActiveBed from './reducer_active_bed';

import RoomsReducer from './reducer_rooms';
import ActiveRoom from './reducer_active_room';

import FloorsReducer from './reducer_floors';
import ActiveFloor from './reducer_active_floor';


const rootReducer = combineReducers({
  beds: BedsReducer,
  activeBed: ActiveBed,

  rooms: RoomsReducer,
  activeRoom: ActiveRoom,
  
  floors: FloorsReducer,
  activeFloor: ActiveFloor,
});

export default rootReducer;
