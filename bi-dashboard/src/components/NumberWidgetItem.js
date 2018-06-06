import React from 'react';
import CountUp from 'react-countup';

const NumberWidgetItem = ({number, user}) => {
    let data = number.data;
    let decimal = 0;
    // HACK: same as NumberViewBox
    if (number.stylingclass === 'number-balls grayball'){
        data = (number.data / user).toFixed(1);
        decimal = 1;
    }
    return(
        <div>
            <div>
                <h3>{number.title}</h3>
            </div>
            <div className={number.stylingclass}>
                <h4>
                    <CountUp
                        start={0}
                        end={data}
                        decimals={decimal}
                        duration={1}
                    />
                </h4>
            </div>
        </div>
    )
}

export default NumberWidgetItem;
