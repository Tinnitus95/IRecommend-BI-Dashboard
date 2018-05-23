import { combineReducers } from 'redux';
import NumberReducer from './reducer_numbers';
import PositionsReducer from './reducer_positions';
import UserScoreReducer from './reducer_userscore';
import TeamScoreReducer from './reducer_teamscore';
import ProtectedReducer from './reducer_protected';
import TimeReducer from './reducer_time';

const rootReducer = combineReducers({
    number: NumberReducer,
    positions: PositionsReducer,
    teamscore: TeamScoreReducer,
    userscore: UserScoreReducer,
    time: TimeReducer
    // protected: ProtectedReducer

});

export default rootReducer;
