const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var CATEGORIAS = [
    {id:1, categoria:"H3A", nome:"Platico", descricao:"Transparente", preco:15.39}
]


app.get('/categorias', (req, res) => {
    res.render('categorias', {categorias: CATEGORIAS})
})
  
app.get('/categoria-deletar/:id', (req, res) => {
    if(req.params.id){
        CATEGORIAS.forEach(categoria => {
            if(categoria.id == req.params.id)
                delete(categoria)
                console.log(`${categoria} deletado`)
        })
    }
})


app.listen(port=3000, () => {
    console.log(`Example app listening on port ${port}`)
})
