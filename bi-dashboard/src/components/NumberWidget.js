import React, {Component} from 'react';
import NumberWidgetItem from './NumberWidgetItem';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions';



class NumberWidget extends Component{
    componentDidMount(){
        this.props.fetchNumbers();
        console.log(this.props.numbers)
    }


    // const numbersDisplay = props.numbers.map((number) => {
    //     return (
    //         <NumberWidgetItem
    //             key={number.name}
    //             number={number}
    //         />
    //     );
    // });
    render (){
        return (
            <div className="row numberWidget">

                {/* {numbersDisplay} */}
            </div>
        );
    };
}

function mapStateToProps(state){
    return { numbers: state.numbers};
}
export default connect(mapStateToProps, {fetchNumbers}) (NumberWidget);
