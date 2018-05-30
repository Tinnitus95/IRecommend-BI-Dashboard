import {FETCH_USERSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_USERSCORE:
        const data = action.payload.data;
        const user = data.map( user => {
          return(
            {
              id: user.user.iduser,
              lastname: user.user.familyname,
              firstname: user.user.givenname,
              picture: user.user.picture,
              points: user.points.Int64,
            }
          );
        });



            return user;


        }
        return state;
    }
