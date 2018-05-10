import React, {Component} from 'react';
import NumberWidgetItem from './NumberWidgetItem';
import {connect} from 'react-redux';
import {fetchNumbers, fetchUserScore} from '../actions';
import _ from 'lodash';


class NumberWidget extends Component{
    componentDidMount(){
        this.props.fetchNumbers();
        this.props.fetchUserScore();
        
    }

    renderPoints(){
      const value = this.props.numbers;
      return value.map( numb => {
        return (
          <NumberWidgetItem
            key={numb.title}
            number={numb}
            user={this.props.userscore.length} />
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
    return { numbers: state.number,
             userscore: state.userscore};

}
export default connect(mapStateToProps, {fetchNumbers, fetchUserScore}) (NumberWidget);
