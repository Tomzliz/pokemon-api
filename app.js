const express = require('express') //import libary use "require"
const app = express() //create express app
const port = 3000

app.use(express.json())

app.get('/' , (req, res) => res.send('Hello Worldjajajajaja!')) // endpoint

let pokemons = [
    {name: 'Pikachu', type:'electric'},
    {name: 'purin', type: 'fairy'}
     ]

app.get('/pokemons', (req, res) => res.send(pokemons))




app.post('/pokemons', (req, res) => {
   console.log(req.body)
  
    pokemons.push(req.body)
    res.sendStatus(201)
})

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))



 
 //call pokemon
 //insert pokemon in database
