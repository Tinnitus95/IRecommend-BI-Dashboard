import React from 'react';
import CountUp from 'react-countup';

const NumberViewBox = ({number, user}) => {
  let data = number.data;
  let decimal = 0;
  console.log(number.stylingclass);

  if (number.stylingclass === 'number-balls grayball'){
      data = (number.data / user).toFixed(1);
      decimal = 1;
  }

  return (


      <div className="number-view-box">
        <div className="number-view-bow-wrapper">
          <h3>{number.title}</h3>
          <p>{number.desc}</p>
        </div>
          <div>
              <h1>
                  <CountUp
                      start={0}
                      // check if count up can take to fixed
                      end={data}
                      decimals={decimal}
                      duration={1}
                  />
              </h1>
          </div>
      </div>
  );

};

export default NumberViewBox;
