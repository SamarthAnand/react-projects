import React, { useState } from 'react';

const Tour = (props) => {
  const [hide, setHide] = useState(true);
  return (<article className='single-tour'>
    <img src={props.image} alt={props.name}></img>
    <footer >
      <div className='tour-info'>
        <h3>{props.name}</h3>
        <h4 className='tour-price'>${props.price} </h4>
      </div>
      <p >
        {!hide ? props.info : `${props.info.substring(0, 200)}...`}{/**
         * .substring(0,200) grabs the first 200 character of the string and then the Read More button is added.
         * To show the post consciesly.
         */}
        <button onClick={() => setHide(!hide)}>{!hide ? 'hide' : 'read more'}</button>
      </p>

      <button className='delete-btn' onClick={() => { props.removeTours(props.id) }}>
        not interested
      </button>
    </footer>


  </article>
  );
};

export default Tour;
