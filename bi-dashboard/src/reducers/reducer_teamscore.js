import {FETCH_TEAMSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_TEAMSCORE:
        const data = action.payload.data;
        let teamArr = [];
        data.map(team => {

            teamArr.push(
                {
                    name: team.team.name,
                    picture: team.team.picture,
                    points: team.points.Int64
                }
                );
            })
         
            return teamArr;

    }
    return state;
}
