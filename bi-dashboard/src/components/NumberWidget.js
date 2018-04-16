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
            {/* <NumberWidgetItem/>
            {props.numbers.name} */}
             {numbersDisplay}
        </div>
        // <ul>
        //
        // </ul>
    );
}

export default NumberWidget;
