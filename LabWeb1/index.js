const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/mirror', function (req, res, next) {
    console.log(req.body)
    res.send(req.body)
})

app.get('/querytojson', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})  

app.get('/paramtojson/name/:name/role/:role', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})

app.get('/animal', (req, res) => {

    zoo = [
        {type:"DOG", name:"Pluto"},
        {type:"CAT", name:"Hercules"},
        {type:"BIRD", name:"Tweety"},
        {type:"DOG", name:"Spiff"},
        {type:"CAT", name:"Tom"},
        {type:"BIRD", name:"Road Runner"} 
    ]

    res_zoo = []

    if(req.query.name){
        zoo.forEach(animal => {
            if(animal.name.toLowerCase().includes(req.query.name.toLowerCase()))
                res_zoo.push(animal)
        })
    }
    else if(req.query.animal){
        zoo.forEach(animal => {
            if(animal.type == req.query.animal)
                res_zoo.push(animal)
        })
    }

    console.log(res_zoo)
    res.send(res_zoo)
})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
