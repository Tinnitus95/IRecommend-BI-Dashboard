import React from 'react';
import CountUp from 'react-countup';

const NumberViewBox = ({number}) => (

    <div className="number-view-box">
        <h3>{number.title}</h3>
        <p>{number.desc}</p>
        <div>
            <h1>
                <CountUp
                    start={0}
                    // check if count up can take to fixed
                    end={number.data}
                    duration={1}
                />
            </h1>
        </div>
    </div>
)

export default NumberViewBox;
