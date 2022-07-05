import React from 'react';

const List = (props) => {
  return (
    <>
      {props.person.map((person) => {
        const { id, name, age, image } = person;  /** we can destructure the json data like this .*/
        return (
          <div key={person.id} className='person'>
            <img src={person.image} alt={person.name}></img>
            <div>
              <h5 >{person.name}</h5>
              <h6>{person.age} years</h6>
              <button onClick={() => { alert(`Happy Birthday ${person.name}`) }}>Wish me</button>
            </div>


          </div>);
      })
      }
    </>
  );
};

export default List;
