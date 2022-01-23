const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}


/* 
    O método express.json() é nativo do express e funciona para reconhecer o objeto da 
    requisição que está sendo recebida (Request Object) como um objeto JSON.

Esse método é chamado como um middleware na sua aplicação utilizando-se o 
código app.use(express.json());. O express.urlencoded() também é nativo no express e
 funciona para reconhecer o objeto da requisição que está sendo recebida como um strings 
 ou arrays. Esse método é então chamado como um middleware na sua aplicação por meio do 
 código app.use(express.urlencoded());.
 
*/