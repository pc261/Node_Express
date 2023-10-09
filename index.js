const express = require("express")
const path = require("path")

const app = express()

const caminhobase = path.join(__dirname, "templates")

app.get('/',(requisicao , resposta) =>{
    resposta.sendFile(`${caminhobase}/index.html`)
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})