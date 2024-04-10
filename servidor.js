const express = require('express')
const app = express()
const port = 9000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.listen(port , ()=>{
  console.log("Servidor iniciado com sucesso")
})

//GET
app.get('/', (req, res) => {
    res.json(lista);
});

//GETbyId
app.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const item = lista.find(item => item.id === id); 

    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item não encontrado');
    }
});

//POST
app.post('/',(req,res) => {
    const novoItem  = req.body;

    lista.push(novoItem)

    res.status(201).send('Item adicionado com sucesso!');
})


app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemAtualizado = req.body;

    const itemIndex = lista.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
     
        lista[itemIndex] = { ...lista[itemIndex], ...itemAtualizado };
        res.send('Item atualizadao com sucesso!');
    } else {
        res.status(404).send('Item não encontrado');
    }
});



//delete/pessoas/id
app.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);

    const itemIndex = lista.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        lista.splice(itemIndex, 1);
        res.send("Item removido com sucesso");
    } else {
        res.status(404).send("Item não encontrado");
    }
});



//lista
var lista =[
    {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
    },
    {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
    },
    {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
    }
   ]
   