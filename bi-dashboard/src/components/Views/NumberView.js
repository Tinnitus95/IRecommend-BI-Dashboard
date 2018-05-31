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


    componentDidMount() {
      let updateStateArray = this.state.hardcode.slice();
      updateStateArray[0] = {...updateStateArray[0],
        data: this.props.data.userscore.length
      };
        this.setState({hardcode: updateStateArray});
        console.log('numberview', this.props.data.userscore);

    }









    render() {
      if(this.props.data.userscore.length > 0){
        const usersScore = this.props.data.userscore.filter( score => score.points).map( score => score.points);
        const totalScore = usersScore.reduce( (a, b) => a + b);
        alert(`Totala poäng för företaget ${totalScore}`);
      }

        const data = this.props.data.numbers;
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
                    user={this.props.data.userscore.length}
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
