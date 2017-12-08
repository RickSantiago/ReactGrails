import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Digite o nome" name="nome"/>
        <input type="text" placeholder="Digite o cpf" name="cpf"/>
        <input type="number" placeholder="Digite a idade" name="idade"/>
        <button type="submit">Cadastrar</button>
      </div>
    );
  }
}

export default App;
