import express, { json } from 'express'
import dotenv from "dotenv"
import cors from 'cors'



// need to add functionality for post so we need to learn that tmrw and we need to 
// write an algoryhten for sorting the useres search and returning that data 

dotenv.config();

const token = process.env.REACT_APP_TOKEN
const app = express()
app.listen(3000)

app.use(cors())
app.use(express.json());



app.post('/posttest', (req,res)=>{
    console.log(req.body)
    res.json('got it')      
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


console.log('hello world')


function findCard(){
    console.log('card found')
}