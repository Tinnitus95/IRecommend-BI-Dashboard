import {FETCH_POSITIONS} from '../actions';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_POSITIONS:
            console.log(action.payload.data);
            return action.payload.data;

    }
    return state;
}
