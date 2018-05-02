import React from 'react';
import CountUp from 'react-countup';

const NumberWidgetItem = ({number}) => {
    // console.log(number);
    return(
      <div>
        <div>
          <h3>{number.title}</h3>
        </div>
        <div className={number.stylingclass}>
            <h3>{number.title}</h3>
            <h4>
                <CountUp
                    start={0}
                    end={number.data}
                />
            </h4>
        </div>
      </div>
    )
}

export default NumberWidgetItem;
