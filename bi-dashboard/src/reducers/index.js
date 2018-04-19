import { combineReducers } from 'redux';
import NumberReducer from './reducer_numbers';
const rootReducer = combineReducers({
    number: NumberReducer
});

export default rootReducer;
