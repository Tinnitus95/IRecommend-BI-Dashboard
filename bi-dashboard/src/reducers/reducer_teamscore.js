import {FETCH_TEAMSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_TEAMSCORE:
        const data = action.payload.data;
        const team = data.map( team => {
          return { name: team.name, picture: team.picture, href: team.href};
        });

          return team;

    }
    return state;
}
