import logo from './img/rick-morty.png';
import './App.css';
import Componentes from './components/Componentes';
import { useState } from 'react';

function App() {
  const [personajes, setPersonajes] = useState(null);
  const  buscarPersonajes = async () => {
   
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const apiPersonajes = await data.json();
    setPersonajes(apiPersonajes.results)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>
        {
          !personajes ?
          (
              <>
            <img src={logo} className="img-home" alt="logo" />
            <button onClick={buscarPersonajes}>Ver personajes</button>
            </>
          ) :
          (
            <Componentes personajes={personajes} setPersonajes={setPersonajes}/>
          )
        }

        

      </header>
    </div>
  );
}

export default App;
