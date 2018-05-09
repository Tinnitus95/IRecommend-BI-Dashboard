import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPositions} from '../actions';
import BarDiagram from './BarDiagram';

import _ from 'lodash';

class PositionContainer extends Component{
    componentDidMount(){
        this.props.fetchPositions();
    }
    render(){
        return (
            <div className="bar-diagram">
                <BarDiagram />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {positions: state.positions};
}
export default connect(mapStateToProps, {fetchPositions}) (PositionContainer);
