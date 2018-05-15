import {FETCH_POSITIONS} from '../actions';


export default function(state = [], action){
    switch (action.type) {
        case FETCH_POSITIONS:
        const data = action.payload.data;
        const title = data.map( title => title.title );
        const recommendations = data.map( rec => rec.recommendations);
        const startDate = data.map( start => start.created);
        const endDate = data.map( end => end.enddate);

        const barData = {
            labels: title,
            datasets: [{
                label: "Antal tips",
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                data: recommendations
            }, {
                label: "Days",
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                data: [3, 5]
            }, {
                label: "Yellow",
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                data: [1,5]
            }]
        }

            return barData;

    }
    return state;
}
