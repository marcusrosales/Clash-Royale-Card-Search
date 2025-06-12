import { useState } from "react"


function App() {
  




  const [change, setChange] = useState('')
  
  const [cardName, setCardName] = useState('')
  const [cardImage, setCardImage] = useState('')
  const [cardElixerCost, setCardElixerCost] = useState(null)
  const [cardRarity, setCardRarity] = useState(null)


  // need to change it so when we click button it takes from our typefunction and sends a reuqest
  // to the backend to look for that card.. hmmmmmm

  // lets make a basic requst to the server first 

  async function clickedFunc(){


    startCardComm()
  }



  async function startCardComm() {
    let cardUserWants = change
    
    const res = await fetch("http://localhost:3000/posttest", {
    method:"POST",
    headers:{'Content-Type': 'application/json' },
    body: JSON.stringify({card:`${cardUserWants}`})
    });

    const data = await res.json()

    let cardName = setCardName(data.name)
    let cardImage = setCardImage(data.iconUrls.medium)

    let elixirCost = setCardElixerCost(data.elixirCost)
    let rarity = setCardRarity(data.rarity)
    

  }



  async function typeFunc(e){
    setChange(e.target.value);
  }


return(<>


    <h1 id="MainH1" className='text-center text-9xl text-shadow-lg/100 text-shadow-purple-950'
    >Clash Royale Card Finder</h1>


    <div className="mt-8 inputDiv" >

  
  
      <input className="text-center border-4 text-4xl rounded-lg h-20 w-120 text-white bg-white  border-black text-shadow-lg/100 text-shadow-black
      placeholder-white placeholder:opacity-0 shadow-lg/100 shadow-black-"
      
      onChange={typeFunc}
      placeholder="Enter Card..."
      
      ></input>
  

      <button className="border-4 rounded-lg h-20 w-55 text-white border-black text-shadow-lg/100 text-shadow-black bg-green-500 hover:bg-green-400 text-5xl 
        shadow-lg/100 shadow-green-800 inputButton"
      
      onClick={clickedFunc}
      
      >Search</button>  

    </div>  



    <div className="cardDiv">
      
      <h1 className="text-7xl text-white text-shadow-lg/100 text-shadow-black ">{cardName}</h1>
      <img src={cardImage}></img>
      
      <div className=" cardData ">
        
        <h2 className="text-6xl text-center text-purple-600 text-shadow-lg/100 text-shadow-black">{cardElixerCost}</h2>
        <h2 className="text-8xl text-center text-white text-shadow-lg/100 text-shadow-black" >{cardRarity}</h2>        
      
      </div>

    </div>




    </>) };

export default App  