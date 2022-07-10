import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkIndex = (num) => {
    if (num > people.length - 1)
      return 0;

    if (num < 0)
      return people.length - 1;

    return num;
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    }

    )
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    }

    )
  }

  const random = () => {
    let newIndex = Math.floor(Math.random() * people.length)
    console.log(newIndex);
    if (newIndex === index)
      newIndex = index + 1;

    setIndex(checkIndex(newIndex));
  }




  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>
      {name}
    </h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>


      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <button className='random-btn' onClick={random}>
        Surprise ME
      </button>
    </div>

  </article>;
};

export default Review;
