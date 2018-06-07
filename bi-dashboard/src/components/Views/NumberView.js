import React, {Component} from 'react';
import {connect} from 'react-redux';
import NumberViewBox from '../NumberViewBox';
import _ from 'lodash';


class NumberView extends Component {
    // TODO: need to fill all the boxes with real data
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
    // HACK: will be fixed when all the data comes from redux
    componentDidMount() {
        let updateStateArray = this.state.hardcode.slice();
        updateStateArray[0] = {...updateStateArray[0],
            data: this.props.userscore.length
        };
        this.setState({hardcode: updateStateArray});
    }
    // HACK: should probably add application state to the component state
    // using the spread operator
    renderReduxData(){
        const data = this.props.numbers;
        return  _.map(data, numb => {
            return (
                <NumberViewBox
                    key={numb.title}
                    number={numb}
                    user={this.props.userscore.length}
                />
            );
        });
    }
    renderHardData(){
        const hardcode = this.state.hardcode;
        return _.map(hardcode, hard => {
            return (
                <NumberViewBox
                    key = {hard.title}
                    number={hard}
                />
            );
        });
    }

    render() {
        return(
            <div className="NumberView">
                {this.renderReduxData()}
                {this.renderHardData()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        numbers: state.number,
        userscore: state.userscore
    };
}

export default connect(mapStateToProps)(NumberView);
