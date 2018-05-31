import { FETCH_IDV_BAR} from '../actions';

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_IDV_BAR:
            const data = action.payload.data;
            const title = data.map(title => title.title);
            const recommendations = data.map(rec => rec.recommendations);
            const startDate = data.map(start => start.created);
            const endDate = data.map(end => end.enddate);

            const idvData = [
                {
                    labels: title,
                    id: 1,
                    datasets: [
                        {
                            label: "Antal tips",
                            backgroundColor: 'rgba(139, 212, 206, 0.6)',
                            data: recommendations
                        }
                    ]
                },
                {
                    labels: title,
                    id: 2,
                    datasets: [
                        {
                            label: "Days",
                            backgroundColor: 'rgba(98, 58, 162, 0.6)',
                            data: [3, 5]
                        }
                    ]
                },
                {
                    labels: title,
                    id: 3,
                    datasets: [
                        {
                            label: "Yellow",
                            backgroundColor: 'rgba(255, 97, 88, 0.6)',
                            data: [1, 5]
                        }
                    ]
                }
            ]

            return idvData;

    }
    return state;
}
