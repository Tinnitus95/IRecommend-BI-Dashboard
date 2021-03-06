import {FETCH_USERSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_USERSCORE:
        const data = action.payload.data;

        const user = data.map( user => {
            //just return the needed data;
            return(
                {
                    id: user.user.iduser,
                    lastname: user.user.familyname,
                    firstname: user.user.givenname,
                    picture: user.user.picture,
                    points: user.points.Int64,
                    teamhref: user.user.team.href
                }
            );
        });
        return user;
    }
    return state;
}
