import {FETCH_TEAMSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_TEAMSCORE:
            console.log(action.payload.data);
            return action.payload.data;

    }
    return state;
}
