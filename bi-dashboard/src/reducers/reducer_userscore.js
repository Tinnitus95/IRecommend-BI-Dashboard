import {FETCH_USERSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_USERSCORE:
            console.log(action.payload.data);
            return action.payload.data;

    }
    return state;
}
