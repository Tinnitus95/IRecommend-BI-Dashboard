import axios from 'axios';

// https://api.irecommend.se/api/v1/bi/positions - Returnerar alla positioner
// https://api.irecommend.se/api/v1/bi/recommendations - Returnerar alla rekommendationer
// https://api.irecommend.se/api/v1/bi/transactions/sum/users - Returnerar den individuella high-score listan
// https://api.irecommend.se/api/v1/bi/transactions/sum/teams - Returnerar high-score för teams
// https://api.irecommend.se/api/v1/bi/transactions/sum/users - Returnerar det totala antalet rekommendationer (state representerar vilket läge rekommendationen är i,

const ROOT_URL = 'https://api.irecommend.se/api/v1/bi/';
const REAL_URL = 'https://api.irecommend.se/api/v1/';
const HEAD_URL = 'https://headagent.irecommend.se/api/v1/'
const TRANSACTIONS = 'transactions/sum/';

//set up variables for easier error handling
export const FETCH_NUMBERS = 'FETCH_NUMBERS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_TEAMSCORE = 'FETCH_TEAMSCORE';
export const FETCH_USERSCORE = 'FETCH_USERSCORE';
export const FETCH_WEEK = 'FETCH_WEEK';
export const FETCH_IDV_BAR ='FETCH_IDV_BAR';
export const FETCH_TIPS = 'FETCH_TIPS';
export const FETCH_GOALS = 'FETCH_GOALS';
export const FETCH_TIME = 'FETCH_TIME';


//Send the accessToken as a header to the backend for authentication
export function fetchNumbers(accessToken){
    const request = axios.get(`${HEAD_URL}recommendations`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_NUMBERS,
        payload: request
    };
}

export function fetchPositions(){
    const request = axios.get(`${ROOT_URL}positions`);

    return {
        type: FETCH_POSITIONS,
        payload: request
    };
}
export function fetchUserScore(accessToken){
    const request = axios.get(`${HEAD_URL}${TRANSACTIONS}users`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_USERSCORE,
        payload: request
    };

}

export function fetchTeamScore(accessToken){
    const request = axios.get(`${HEAD_URL}teams`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_TEAMSCORE,
        payload: request
    };

}

export function fetchWeek(accessToken){
    const request = axios.get(`${HEAD_URL}recommendations`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_WEEK,
        payload: request
    };
}

export function fetchIdvBar(){
    const request = axios.get(`${ROOT_URL}positions`);

    return {
        type: FETCH_IDV_BAR,
        payload: request
    };
}

export function fetchGoals(accessToken){
    const request = axios.get(`${HEAD_URL}goals`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_GOALS,
        payload: request
    };
}

export function fetchTime(accessToken){
    const request = axios.get(`${HEAD_URL}recommendations`, {'headers': {'Authorization' : `Bearer ${accessToken}`}});

    return {
        type: FETCH_TIME,
        payload: request
    };
}

// TODO: 401 error when trying to fetch all users recommendations
// export function fetchTips(accessToken){
//     const request =
//     axios.get(`${HEAD_URL}${TRANSACTIONS}users`, {'headers': {'Authorization' : `Bearer ${accessToken}`}})
//     .then((response) => {
//         response.data.forEach((user) => {
//
//             return axios.get(`${HEAD_URL}recommendations/user/${user.user.iduser}`, {'headers': {'Authorization' : `Bearer ${localStorage.getItem('access_token')}`}});
//         });
//     });

//     return {
//         type: FETCH_TIPS,
//         payload: request
//     };
// }
