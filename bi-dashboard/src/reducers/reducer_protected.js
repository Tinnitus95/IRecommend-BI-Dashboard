import {FETCH_PROTECTED} from '../actions';


const defaultState = [];

export default function(state = defaultState, action){
    switch (action.type) {
        case FETCH_PROTECTED:
            console.log(data);
                const data = action.payload.data

        console.log('called!');
        console.log(action.payload.data);
            return state;
          }
    return state;
}
