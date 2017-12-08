import React, { Component } from 'react';

class App extends Component {
  state = {
    nome: '',
    idade: 0,
    cpf: ''
  }
  
  onSubmit = () => {
    let { idade, nome, cpf } = this.state
    
    fetch( API_URL, {
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
        <form onSubmit={(e) => { 
          e.preventDefault
          this.onSubmit()
        }>
          <input type="text" placeholder="Digite o nome" name="nome" value={ this.state.nome } onChange={ (e) => this.setState({ nome: this.target.value }) }/>
          <input type="text" placeholder="Digite o cpf" name="cpf" value={ this.state.cpf } onChange={ (e) => this.setState({ cpf: this.target.value }) }/>
          <input type="number" placeholder="Digite a idade" name="idade" value={ this.state.idade }onChange={ (e) => this.setState({ idade: this.target.value }) } />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
