const API_URL = 'http://localhost:9999/pessoa/'

const Usuario = {
  criar: args => {
    return fetch( API_URL, {
      headers: new Headers ({
        "content-type": "application/json",
        "Accept": "application/json"
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
