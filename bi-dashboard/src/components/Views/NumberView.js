import React, {Component} from 'react';
import NumberViewBox from '../NumberViewBox';

class NumberView extends Component {
    state={
        hardcode:[
            {
                title: 'Antal Registrerade',
                desc: 'Totalt på företaget',
                data: 120
            },
            {
                title: 'Totala poäng för företaget',
                desc: 'description',
                data: 2000
            },
            {
                title: 'Vinnare',
                desc: 'Totalt Antal Vinnare',
                data: 0
            },
            {
                title: 'Total mängd reward',
                desc: 'BLING BLING',
                data: 6969,

            },
            {
                title: 'Antal Teams',
                desc: 'Totalt antal teams i företaget',
                data: 3
            },
            {
                title: 'Nästa delmål',
                desc: 'Poäng kvar till nästa mål',
                data:  23742
            },
            {
                title: 'Lediga Tjänster',
                desc: 'Alla',
                data: 10000
            }

        ]

    }

    render() {
        const data = this.props.data.numbers;
        console.log(data);
        const value = data.map( numb => {
            return (
                <NumberViewBox
                    key={numb.title}
                    number={numb}
                />
            );
        });
        const harddata = this.state.hardcode.map( hard => {
            return (
                <NumberViewBox
                    key = {hard.title}
                    number={hard}
                />
            );
        });

        return(
            <div className="NumberView">
                {value}
                {harddata}
            </div>
        );
    }
}

export default NumberView;
