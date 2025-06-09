import dotenv from 'dotenv'
dotenv.config();


const token = process.env.REACT_APP_TOKEN;
    async function fetchCard() {
        const response = await fetch('https://api.clashroyale.com/v1/cards/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                }
        })
        const data = await response.json();
        return(data)
    }


console.log(await fetchCard())