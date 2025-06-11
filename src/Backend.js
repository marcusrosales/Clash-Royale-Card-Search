import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config();

const token = process.env.REACT_APP_TOKEN
const app = express()
app.listen(3000)

app.use(cors())

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
console.log('server running today')