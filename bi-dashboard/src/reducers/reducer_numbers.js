import {FETCH_NUMBERS} from '../actions/index';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_NUMBERS:
            console.log(action.payload.data);
            return action.payload.data;

    }
    return state;
}
