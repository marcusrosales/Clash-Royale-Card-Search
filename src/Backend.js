import dotenv from 'dotenv'
dotenv.config();

const express = require("express");
const app = express();


const token = process.env.REACT_APP_TOKEN;

    async function fetchCard() {
        const response = await fetch('https://api.clashroyale.com/v1/cards/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                }
        })
        const data = await response.json();
        const slicedData = data.items.slice(0,1)
        return(slicedData)
    }



console.log(await fetchCard())


console.log('hello there')