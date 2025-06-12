import { useState } from "react"


function App() {
  




  const [change, setChange] = useState('')



  // need to change it so when we click button it takes from our typefunction and sends a reuqest
  // to the backend to look for that card.. hmmmmmm

  // lets make a basic requst to the server first 

  async function clickedFunc(){


    startCardComm()
  }



  async function startCardComm() {
    let cardUserWants = change
    console.log(cardUserWants)
    
    const res = await fetch("http://localhost:3000/posttest", {
    method:"POST",
    headers:{'Content-Type': 'application/json' },
    body: JSON.stringify({card:`${cardUserWants}`})
    });
    const data = await res.json
    console.log(data)




  }



  async function typeFunc(e){
    setChange(e.target.value);
  }


return(<>


    <h1 id="MainH1" className='text-center text-9xl text-shadow-lg/100 text-shadow-purple-950'
    >Clash Royale Card Finder</h1>


    <div className="mt-8 inputDiv" >

  
  
      <input className="border-4 rounded-lg h-20 w-120 hover:bg-purple-400 bg-white text-5xl text-center text-shadow-lg/100 text-shadow-purple-950 inputField"
      onChange={typeFunc}
      placeholder="Enter Card..."
      ></input>
  

      <button className="border-4 rounded-lg h-20 w-55 text-white border-black hover:bg-purple-400  text-shadow-black text-5xl inputButton"
      onClick={clickedFunc}
      >search</button>  



    </div>  





    <div className="cardDiv">
      <h1 className="text-7xl center"></h1>
      <img></img>



    </div>


    </>) };

export default App  