import {FETCH_USERSCORE} from '../actions';

export default function(state = [], action){
    switch (action.type) {
        case FETCH_USERSCORE:
        const data = action.payload.data;
        console.log(data);
        let userArr = [];
        data.map(user => {
            
            userArr.push(
                {
                    lastname: user.user.familyname,
                    firstname: user.user.givenname,
                    picture: user.user.picture,
                    points: user.points.Int64
                }
                );
            })
            console.log('userArr:' ,userArr);

            return userArr;

        }
        return state;
    }
