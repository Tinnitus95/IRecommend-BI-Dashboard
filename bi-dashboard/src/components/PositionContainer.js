import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPositions} from '../actions';

import _ from 'lodash';

class PositionContainer extends Component{
    componentDidMount(){
        this.props.fetchPositions();
    }
    render(){
        return (
            <div></div>
        );
    }
}

function mapStateToProps(state){
    return {positions: state.positions};
}
export default connect(mapStateToProps, {fetchPositions}) (PositionContainer);
