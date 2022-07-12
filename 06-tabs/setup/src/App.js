import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [values, setValues] = useState(0);

  /**
   * fetchData fuction gets the data from api, converts 
   * it to json format and
   * sets the Jobs state with data and loading to false.
   */
  const fetchdata = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setJobs(data);
    setLoading(false);
  }
  /*
   * fetchData is called in useEffect to call the data once
  the page is rendered.
   */
  useEffect(() => {
    fetchdata();
  }, [])

  if (loading) {
    return <section className="section loading">
      <h1>Loading...</h1>
    </section>
  }

  const { company, title, dates, duties } = jobs[values];
  return (<section className='section'>
    <div className='title'>
      <h1>Employment Details</h1>

      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/**btn  
       * -> in the button tag classNames can be conditionally changed
       * -> initially the class was job-btn but if index === values it changed to active-btn
       * 
      */}
      <div className="btn-container">
        {jobs.map((item, index) => {
          return (<button className={`job-btn ${index === values && 'active-btn'}`}
            key={item.id}
            onClick={() => setValues(index)}
          >
            {item.company}
          </button>)
        })}

      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p></div>
        })}

      </article>
    </div>
    <button type="button" className="btn">
      more info
    </button>

  </section >
  )


}

export default App
