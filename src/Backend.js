import express, { json } from 'express'
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config();




const token = process.env.REACT_APP_TOKEN
const app = express()
app.listen(3000)
 
app.use(cors())
app.use(express.json());


app.post('/posttest', async (req,res)=>{
    let CardData = req.body.card

    let bloat = await fetchCard()
    
    const foundCard = bloat.items.find(card => card.name.toLowerCase() === CardData.toLowerCase().trim())
    console.log(foundCard)
    res.send(foundCard)
})

async function fetchCard() {
    const response = await fetch('https://api.clashroyale.com/v1/cards/', {
        headers: { Authorization: `Bearer ${token}`},
    });

    const data = await response.json();
    //const oneCard = data.items.slice(0,1);
    return(data)
}
