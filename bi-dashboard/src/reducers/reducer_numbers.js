import {FETCH_NUMBERS} from '../actions/index';
import _ from 'lodash';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_NUMBERS:
            console.log(action.payload.data);
            return action.payload.data;

    }
    return state;
}
