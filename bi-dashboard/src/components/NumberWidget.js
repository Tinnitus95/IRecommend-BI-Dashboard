import React, {Component} from 'react';
import NumberWidgetItem from './NumberWidgetItem';
import {connect} from 'react-redux';
import {fetchNumbers} from '../actions';
import _ from 'lodash';


class NumberWidget extends Component{
    componentDidMount(){
        this.props.fetchNumbers();

    }

    renderPoints(){
      const value = this.props.numbers;
      return value.map( numb => {
        return (
          <NumberWidgetItem
            key={numb.title}
            number={numb} />
        );
      });
    }

render (){
    return (
        <div className="row numberWidget">
            {this.renderPoints()}
        </div>
    );
  };
}

function mapStateToProps(state){
    return { numbers: state.number};
}
export default connect(mapStateToProps, {fetchNumbers}) (NumberWidget);
