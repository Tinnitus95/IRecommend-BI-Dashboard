import React from 'react';

const NumberWidgetItem = ({number}) => {
    console.log(number);
    return(
        <div className="col-sm-2 offset-sm-1 center">
            <h3>{number.name}</h3>
            <h4>{number.amount}</h4>
        </div>
    )
}

export default NumberWidgetItem;
