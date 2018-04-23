import React from 'react';

const NumberWidgetItem = ({number}) => {
    console.log(number);
    return(
        <div className="col-sm-2  center">
            <h3>{number.title}</h3>
            <h4>{number.data}</h4>
        </div>
    )
}

export default NumberWidgetItem;
