import {FETCH_GOALS} from '../actions';

const defaultTipsState = [];

export default (state = defaultTipsState, action) => {
    switch (action.type) {
        case FETCH_GOALS:
        return [
            ...state,
            action.payload
        ]
        default:
        return state;
    }
}
