import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <h1 className="card-heading">{props.heading}</h1>
      <h4 className="description">{props.description}</h4>
      <h4 className='summary'>Summary : {props.summary}</h4>
      <a href={props.link} className="card-link">Visit Commit</a>
      <p className='date'>Date of Commit : {props.date}</p>
    </div>
  );
}

export default Card;
