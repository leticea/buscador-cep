import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('');

  function handleSearch() {
    alert("valor do input " + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 98765556</h2>

        <span>Rua teste</span>
        <span>Complemento: algum complemento</span>
        <span>Alfeneiros</span>
        <span>São Paulo - SP</span>

      </main>
    </div>
  );
}

export default App;
