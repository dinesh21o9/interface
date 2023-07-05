import React from 'react';

function Card(props) {
  return (
    <div className="card">

      <h2 className="card-heading">{props.heading}</h2>
      <h4 class="description">{props.description}</h4>
      <a href={props.link} className="card-link">Visit Commit</a> 
      <p>{props.date}</p>
      
    </div>
  );
}

export default Card;
