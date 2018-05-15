import {FETCH_POSITIONS} from '../actions';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_POSITIONS:
        const data = action.payload.data;
        let positionArr = [];

        data.map( pos => {
            positionArr.push(
                {
                    title: pos.title,
                    recommendations: pos.recommendations,
                    startDate: pos.created,
                    endDate: pos.enddate
                }
            )
        })
        
            return positionArr;

    }
    return state;
}
