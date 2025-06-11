import { useState } from "react"


function App() {
  
  
  const [cardImage, setCardImage] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardElixerCost, setCardElixerCost] = useState('')


  async function clickedFunc(){
    console.log('clicked button')

    const res = await fetch("http://localhost:3000/cardrequest")
    const data = await res.json()

    setCardImage(data[0].iconUrls.medium)
    setCardName(data[0].name)

  }
return(<>
    <h1 id="MainH1" className='text-center text-8xl text-shadow-lg/100 text-shadow-purple-950'
    >Clash Royale Card Finder</h1>
    <div className="mt-8 inputDiv" >
      <input className="border-2 h-9 w-35"
      
      ></input>
  
  
      <button className="border-2 h-9 w-20"
      onClick={clickedFunc}
      >search</button>  
    </div>




    <div className="cardDiv">
      <h1 className="text-7xl center">{cardName}</h1>
      <img src={cardImage}></img>



    </div>


    </>) };

export default App  