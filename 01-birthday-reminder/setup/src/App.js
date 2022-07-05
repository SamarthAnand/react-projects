import React, { useState } from 'react';
import data from './data';
import List from './List';
import GetData from './GetData';
function App() {

  const [person, setPerson] = useState(data);

  function clearAll() {
    setPerson([]);
  }
  return (<main>
    <section className="container">
      <h3>
        Birthday list
      </h3>
      <h4>{person.length} Bday's Today </h4>
      <List person={person} />
      <button style={{ width: '100%' }} onClick={() => { clearAll() }}> Clear All </button>
    </section>
  </main>);
}

export default App;
