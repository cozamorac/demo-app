import logo from './logo.svg';
import './App.css';

function App() {
  var nombre = "Hrist-Joy";
  var presentacion = <h1>Hola mi name is: {nombre}</h1>
  var presentacion1 = <h1>feature/ cambios: {nombre}</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prueba de Git
        </a>
        {
         presentacion1
        }
      </header>
    </div>
  );
}

export default App;
