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
