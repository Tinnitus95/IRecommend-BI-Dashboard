import React from 'react';
import CountUp from 'react-countup';

const NumberWidgetItem = ({number}) => {
    console.log(number);
    return(
      <div>
        <div>
          <h3>{number.title}</h3>
        </div>
        <div className={number.stylingclass}>
            <h4>
                <CountUp
                    start={0}
                    end={number.data}
                />
                &nbsp;st
            </h4>
        </div>
      </div>
    )
}

export default NumberWidgetItem;
