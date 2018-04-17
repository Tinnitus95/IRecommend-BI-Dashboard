import React from 'react';
import NumberWidgetItem from './NumberWidgetItem';

const NumberWidget = (props) => {
    console.log(props);
    const numbersDisplay = props.numbers.map((number) => {
        return (
            <NumberWidgetItem
                key={number.name}
                number={number}
            />
        );
    });
    return (
        <div className="row numberWidget">

             {numbersDisplay}
        </div>

    );
}

export default NumberWidget;
