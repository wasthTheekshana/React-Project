import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const[tours,setTours] = useState([])
  const[loading,setLoading] = useState(true)

const removeTour = (id) =>{
    const newtour = tours.filter((tours) => tours.id != id)
  setTours(newtour)
}

  const fectData = async ()=>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    fectData()
  },[])

  if (loading){
    return(
        <main>
          <Loading/>
        </main>
    );
  }

  if (tours.length === 0){
    return (
      <main>
        <div className="title">
        <h3>No Tours Left</h3>
        <button className="btn" onClick={() => fectData()}> Refresh</button>
        </div>
      </main>
    );
  }
  return(
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
  );
}

export default App
