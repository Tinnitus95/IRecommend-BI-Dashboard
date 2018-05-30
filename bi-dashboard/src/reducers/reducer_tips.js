import {FETCH_TIPS} from '../actions';

const defaultTipsState = [];


export default (state = defaultTipsState, action) => {
    switch (action.type) {
        case FETCH_TIPS:
        console.log('tips called');
        return [
            ...state,
            action.payload
        ]

        default:
            return state;

    }
}
