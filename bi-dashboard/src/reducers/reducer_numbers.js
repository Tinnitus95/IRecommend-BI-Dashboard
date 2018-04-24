import {FETCH_NUMBERS} from '../actions/index';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_NUMBERS:
            const data = action.payload.data;
            const totalRec = data.length;
            const interestedRec = data.filter( pers => pers.notinterested === false).length;
            const interviewedRec = data.filter( state => { return state.state === 8}).length;
            const employed = data.filter( state => { return state.state === 11}).length;

            let numberArr = [
              {title: 'Antal tips', data: totalRec, stylingclass: 'greenballs' },
              {title: 'Intresserade rekommendationer', data: interestedRec, stylingclass: 'greenballs' },
              {title: 'Intervjuade kandidater', data: interviewedRec, stylingclass: 'greenballs'},
              {title: 'Tips som lett till anställning', data: employed, stylingclass: 'greenballs'},
              //hardcoded value, waiting for fetch from renderPoint
              {title: 'Tips per person', data: 5.3, stylingclass: 'grayball'}
            ];

            return numberArr;


    }
    return state;
}
