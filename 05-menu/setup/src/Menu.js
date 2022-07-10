import React from 'react';

const Menu = (props) => {
  return (<div className="section-center">
    {props.items.map((item) => {
      const { id, title, category, price, img, desc } = item;
      return (
        <div key={id} className="menu-item">

          <img src={img} alt={title} className='photo'></img>
          <div className="item-info">
            <header>
              <h4>
                {title}
              </h4>
            </header>
            <div className="price">${price}</div>

            <div className="item-text">{desc}</div>
          </div>

          <div className="item-info">

          </div>
        </div>
      );
    })}
  </div>);

};

export default Menu;
