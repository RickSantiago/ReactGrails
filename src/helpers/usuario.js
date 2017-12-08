const API_URL = 'http://www.suaapifodona.com/api'

const Usuario = {
  criar: args => {
    return fetch( API_URL, {
      headers: {
        "content-type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(
        {
          nome: args.nome,
          idade: args.idade,
          cpf: args.cpf
        }
      )
    })
  }
}

export default Usuario
