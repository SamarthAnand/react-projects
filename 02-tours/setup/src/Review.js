import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
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
            index = index - 1;
            return checkIndex(index);
        })
    }
    const nextPerson = () => {
        setIndex((index) => {
            index = index + 1;
            return checkIndex(index);
        })
    }
    const randomPerson = () => {
        let newIndex = Math.floor(Math.random() * people.length);
        if (newIndex === index) {
            newIndex = index + 1;
        }
        setIndex(checkIndex(newIndex));
    }
    return (
        <article className='review'>
            <div className="img-container">

                <img src={image} alt={name} className="person-img"></img>
                <div className="quote-icon">
                    <FaQuoteRight />
                </div>

            </div>
            <div className="author">{name}</div>
            <div className="job">{job}</div>
            <div className="info">{text}</div>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>

            </div>
            <button className='random-btn' onClick={randomPerson}>
                Random Comments
            </button>
        </article>
    )
}

export default Review