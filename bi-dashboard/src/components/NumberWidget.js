import React, {Component} from 'react';
import NumberWidgetItem from './NumberWidgetItem';

const NumberWidget = ({data, users}) => {
    const value = data.map( numb => {
        return (
            <NumberWidgetItem
                key={numb.title}
                number={numb}
                user={users.length} />
            );
        });

        return (
            <div className="row number-widget">
                {value}
            </div>
        );
    }

    export default NumberWidget;
