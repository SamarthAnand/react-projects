import React, { useState } from 'react';
import data from './data';
import List from './List';
import GetData from './GetData';
function App() {

  /**
   * useState is defined at the top of the function.
   * data is passed in the state
   */
  const [person, setPerson] = useState(data);

  /**
   * clearAll function clears the array of birthdays that are to be shown. setss the person state to an empty array.
   * 
   */
  function clearAll() {
    setPerson([]);
  }
  return (<main>
    <section className="container">
      <h3>
        Birthday list
      </h3>
      <h4>{person.length} Bday's Today </h4>
      <List person={person} />  {/**
       * here the person is passed as props. and then the props are called in 
       * the list.js function 
       */}
      <button style={{ width: '100%' }} onClick={() => { clearAll() }}> Clear All </button>

    </section>
  </main>);
}

export default App;
