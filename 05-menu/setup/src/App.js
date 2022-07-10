import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategory = ['all', ...new Set(items.map((item) =>
  item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoreis, setCategoreis] = useState(allCategory);



  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) =>
      item.category === category)
    setMenuItems(newItems);
  }
  return (<main>
    <section className='menu section'>
      <div className='title'>
        <h2>Menu</h2>
      </div>
      <div className="underline"></div>
      <Categories categoreis={categoreis} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>);
}

export default App;
