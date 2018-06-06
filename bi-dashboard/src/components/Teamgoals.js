import React from 'react';

const teamgoals = (props) => {
  let data = {};
  if(props.data[0]){
    data = props.data[0].data.goals[1];
  }

  return (
    <div className="teamgoals">
      <h2>Poäng: {data.points}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt="goals" />
    </div>
  );

};

export default teamgoals;
