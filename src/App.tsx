import React, { useState } from "react"
import { useEffect } from "react"

function App() {
  function clickedFunc(){
    console.log("tests click")
  }

  function typedFunc(){
    console.log("test type")
  }

  
return(<>
    <h1 id="MainH1" className='text-center text-8xl text-shadow-lg/100 text-shadow-purple-950'
    >Clash Royale Card Finder</h1>
    <div className="mt-8 inputDiv" >
      <input className="border-2 h-9 w-35"
      onChange={typedFunc}
      ></input>
  
  
      <button className="border-2 h-9 w-20"
      onClick={clickedFunc}
      >search</button>  
    </div>


    </>) };

export default App