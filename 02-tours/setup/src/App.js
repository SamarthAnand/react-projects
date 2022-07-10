import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Review from './Review';
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    } catch (error) {

      setLoading(false);
      console.log("there was an error");
    }
  }
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }


  return (loading ? <main>
    <Loading />
  </main> : (tours.length == 0) ? <main >
    <div className='title'>
      <h2>No Tours Left</h2>
      <button className='delete-btn' onClick={() => { fetchData() }}>
        Refresh
      </button>
      <Review />
    </div>

  </main> :
    <main>
      <Tours tours={tours} removeTours={removeTours} />
      <Review />
    </main>
  );
}


export default App
