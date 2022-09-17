const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var CATEGORIAS = [
    {id:1, categoria:"H3A", nome:"Platico", descricao:"Transparente", preco:15.39}
]


app.get('/categorias', (req, res) => {
    res.render('categorias', {categorias: CATEGORIAS});
});
  



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
