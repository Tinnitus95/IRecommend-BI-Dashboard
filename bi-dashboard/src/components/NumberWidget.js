import React, {Component} from 'react';
import NumberWidgetItem from './NumberWidgetItem';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions';
import _ from 'lodash';


class NumberWidget extends Component{
    componentDidMount(){
        this.props.fetchNumbers();

    }


    // const numbersDisplay = props.numbers.map((number) => {
    //     return (
    //         <NumberWidgetItem
    //             key={number.name}
    //             number={number}
    //         />
    //     );
    // });
    // filterPoints = () => {
    //     console.log('filter called');
    //     let value = this.props.number
    //     for(let i = 0, x = value.length; i < x; i++){
    //         console.log(value[i]);
    //     }
    // }
    renderPoints(){
        // if(this.props.numbers.length !== 0){
            // let val = this.props.numbers;
            // for (var i = 0; i < val.length; i++) {
            //     console.log(val[i].generatedpoints);
            // }
            return _.map(this.props.numbers, numberItem => {
            return(
                <NumberWidgetItem
                    key={numberItem.idrecommendations}
                    number={numberItem}
                />
                
            );
        });

        // }


    }



    render (){

        console.log('numberWidget was rendered');
        return (
            <div className="row numberWidget">
                {this.renderPoints()}
                {/* {numbersDisplay} */}
            </div>
        );
    };
}

function mapStateToProps(state){
    return { numbers: state.number};
}
export default connect(mapStateToProps, {fetchNumbers}) (NumberWidget);
