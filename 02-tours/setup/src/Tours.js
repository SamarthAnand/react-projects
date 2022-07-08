import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (<section>
    <div className='title'>
      <h2> Tour's List</h2>
      <div className="underline">
      </div>
    </div>
    <div >
      {props.tours.map((tour) => {
        return (<Tour key={tour.id} {...tour} removeTours={props.removeTours} />);  /**
          {...tour} means I'll have access to all the properties in the object of Tour component.
          */
      }
      )}

    </div>
  </section>)
};

export default Tours;
