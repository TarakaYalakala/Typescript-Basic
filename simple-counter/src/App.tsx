import React from 'react'
import { useState } from 'react'

function App() {


const [data, setdata] = useState <number>(0);

const handleInc = ():number | string => {
  setdata(data + 1);
  return data;
}


const handleDec = (): number => {
   setdata(data - 1);
   return data;

}

  return (
    <div>
      <div className="container">
        <button onClick={handleInc}>+</button>
        <h2>{data}</h2>
        <button onClick={handleDec}>-</button>

      </div>
    </div>
  )
}

export default App