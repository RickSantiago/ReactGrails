const API_URL = 'http://www.suaapifodona.com/api'

const Usuario = {
  criar: args => {
    return fetch( API_URL, {
      headers: new Headers ({
        "content-type": "application/json",
        "cache-control": "no-cache"
      }),
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
