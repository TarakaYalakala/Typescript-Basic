import React from 'react'
import { useState } from 'react'

function App() {


const [data, setdata] = useState <number>(0);

const [obj, setobj] = useState<number>(0);

class token {
  constructor(public jwt: number) {

  }

  set tokens(val: number) {
    this.jwt = val;
  }
}

const tokenObj = new token(0);
tokenObj.tokens = data;



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
        <h3>DataSetter:{tokenObj.jwt}:</h3>
        <button onClick={handleDec}>-</button>

      </div>
    </div>
  )
}

export default App