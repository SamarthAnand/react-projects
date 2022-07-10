import React from 'react';

const Categories = (props) => {
  return <div className='btn-container'>
    {props.categoreis.map((category, index) => {


      return <button key={index} onClick={() => props.filterItems(category)} className='filter-btn'>{category} </button>

    })}

  </div>;
};

export default Categories;
