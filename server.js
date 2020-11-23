const express = require('express');
const app = express();
const PORT = 5000;
const axios = require("axios");


app.use(express.json({
    type: 'application/json'
}))


//get cocktails based on ingredient 
app.get('/:id', (req, res) => {
    const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    axios.get(API_URL + req.params.id).then((drinkList) => {
        res.send(drinkList.data);
    });
})

//get cocktail information from name
app.get('/drink/:id', (req, res) => {
    const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    axios.get(API_URL + req.params.id).then((drinkList) =>
        res.send(drinkList.data));
})


app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})