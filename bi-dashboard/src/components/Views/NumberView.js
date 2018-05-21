import React, {Component} from 'react';
import NumberViewBox from '../NumberViewBox';

class NumberView extends Component {
    state={
        hardcode:[
            {
                title: 'Antal Registrerade',
                desc: '420 blaze it faggot',
                data: 120
            },
            {
                title: 'Totala poäng för företag',
                desc: 'Chupa mi Padrito',
                data: 2000
            },
            {
                title: 'Totalt Antal Vinnare',
                desc: 'No winners here, only tears',
                data: 0
            },
            {
                title: 'Total mängd reward',
                desc: 'BLING BLING',
                data: 6969,

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
        const hard_dixx = this.state.hardcode.map( hard => {
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
                {hard_dixx}
            </div>
        );
    }
}

export default NumberView;
