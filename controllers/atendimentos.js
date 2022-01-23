//exportando a função
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando, tudo ok'))

    app.post('/atendimentos', (req,res) => {
        console.log(req.body)
        res.send('Você está na rota de atendiemnto POST')
    })

}

