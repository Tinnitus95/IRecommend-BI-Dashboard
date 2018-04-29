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
              {title: 'Antal tips', data: totalRec + " st", stylingclass: 'greenballs' },
              {title: 'Intresserade', data: interestedRec + " st", stylingclass: 'greenballs' },
              {title: 'Intervjuade', data: interviewedRec + " st", stylingclass: 'greenballs'},
              {title: 'Anställning', data: employed + " st", stylingclass: 'greenballs'},
              //hardcoded value, waiting for fetch from renderPoint
              {title: 'Tips per person', data: 5.3, stylingclass: 'grayball'}
            ];

            return numberArr;


    }
    return state;
}
