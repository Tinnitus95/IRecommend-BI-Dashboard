import {FETCH_PROTECTED} from '../actions';



export default function(state = {}, action){
    switch (action.type) {
        case FETCH_PROTECTED:
                const data = action.payload.data

            return state;

    }
}
