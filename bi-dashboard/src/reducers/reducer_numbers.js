import {FETCH_NUMBERS} from '../actions/index';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_NUMBERS:
        console.log(action.payload);
            const data = action.payload.data;
            const totalRec = data.filter( state => { return state.state >= 10 }).length;
            const interestedRec = data.filter (state => { return state.state >= 50 }).length;
            const interviewedRec = data.filter( state => { return state.state >= 100}).length;
            const employed = data.filter( state => { return state.state >= 130}).length;

            let numberArr = [
              {title: 'Antal tips', desc: 'Totalt antal tips', data: totalRec, stylingclass: 'number-balls greenballs' },
              {title: 'Intresserade', desc: 'Antal tips som visat intresse', data: interestedRec, stylingclass: 'number-balls greenballs' },
              {title: 'Intervjuade', desc: 'Antal tips som gått till intervju', data: interviewedRec, stylingclass: 'number-balls greenballs'},
              {title: 'Anställning', desc: 'Antal tips som lett till anställning', data: employed, stylingclass: 'number-balls greenballs'},
              //We send total recommendations and then divide in NumberWidgetItem.js
              {title: 'Tips per person', desc: 'Antal', data: totalRec , stylingclass: 'number-balls grayball'}
            ];

            return numberArr;


    }
    return state;
}
