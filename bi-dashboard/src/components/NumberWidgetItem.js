import React from 'react';

const NumberWidgetItem = ({number}) => {
    // console.log(number);
    return(
      <div>
        <div className="">
          <h3>{number.title}</h3>
        </div>
        <div className={number.stylingclass}>
            <h4>{number.data}</h4>
        </div>
      </div>
    )
}

export default NumberWidgetItem;
