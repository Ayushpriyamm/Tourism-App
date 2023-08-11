import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";



function App(){

  const[tours,setTours]=useState(data);

  function removeTour(id){
    const newTours=tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }

  if(tours.length==0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return(
    <div className="app">
    
    <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  )

}



export default App;
