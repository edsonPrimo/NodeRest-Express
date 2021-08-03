const customExpress = require ('./config/customExpress') // configurando servidor
const conexao = require('./infraestrutura/conexao') // criando conexão com mysql
const Tabelas = require('./infraestrutura/tabelas') 

conexao.connect((erro) => {
  if(erro) {
    console.log(erro)
  }
  else {
    console.log('conectado com sucesso')

    Tabelas.init(conexao)
    const app = customExpress()
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

  }

})
