import React from "react";

export const ContestItem = (props) => {
  return (
    <div>
      <div className='card'>
        <div className='card-header'>Name</div>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href='/' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
      ;
    </div>
  );
};
