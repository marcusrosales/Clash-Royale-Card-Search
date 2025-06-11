import express from 'express'
import dotenv from "dotenv"

dotenv.config();
const token = process.env.REACT_APP_TOKEN




const app = express()


app.listen(3000)

app.get("/", (req,res)=> {
    res.send('hello')
})


console.log('testing ')


