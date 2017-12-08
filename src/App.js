import React, { Component } from 'react';
import Input from './components/Input.js'

class App extends Component {
  state = {
    nome: '',
    idade: 0,
    cpf: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    let { idade, nome, cpf } = this.state

    fetch( 'API_URL', {
      headers: {
        "content-type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(
        {
          nome: nome,
          idade: idade,
          cpf: cpf
        }
      )
    })
    .then(response => console.log(response))
    .catch(erro => console.log(erro))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Input
            type='text'
            placeholder='Digite o nome'
            name='nome'
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}/>

          <Input
          type="text"
          placeholder="Digite o cpf"
          name="cpf"
          value={this.state.cpf}
          onChange={ (e) => this.setState({ cpf: e.target.value }) }/>

          <Input
          type="text"
          placeholder="Digite a idade"
          name="idade"
          value={this.state.idade}
          onChange={ (e) => this.setState({ idade: e.target.value }) }/>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default App;
