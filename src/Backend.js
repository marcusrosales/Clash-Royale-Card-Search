import express, { json } from 'express'
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config();

// write an algoryhten for sorting the useres search and returning that data 



const token = process.env.REACT_APP_TOKEN
const app = express()
app.listen(3000)
 
app.use(cors())
app.use(express.json());



app.post('/posttest', (req,res)=>{
    let CardData = req.body.card
    return(CardData)
})



app.get('/', (req, res) => {
  res.send('Server is running');
});



app.get("/cardrequest", async (req,res)=>{
    const cards = await fetchCard()
    res.json(cards)
})
    

async function fetchCard() {
    const response = await fetch('https://api.clashroyale.com/v1/cards/', {
        headers: { Authorization: `Bearer ${token}`},
    });

    const data = await response.json();
    const oneCard = data.items.slice(0,1);
    return(oneCard)
}




function findCard(){
    console.log('card found')
}