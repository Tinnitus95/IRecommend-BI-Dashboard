import {FETCH_TIPS} from '../actions';

const defaultTipsState = [];


export default (state = defaultTipsState, action) => {
    switch (action.type) {
        case FETCH_TIPS:
        console.log(action.payload);
        return [
            ...state,
            action.payload
        ]

        default:
            return state;

    }
}
