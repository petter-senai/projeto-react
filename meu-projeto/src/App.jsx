import { useState } from 'react'
import logoSenai from './assets/logo_senai.png'
import './App.css'
import Cursos from './componentes/Cursos'

function App() {
  const [count, setCount] = useState(0)
  const usuario = "Fulano";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logoSenai} className="" alt="Vite logo" />
        </a>
      
      </div>
      <h1 className='titulo'> Bem vindo ao Senai </h1>
      <h2> Bem vindo, {usuario} </h2>
      <p className="read-the-docs">
        Conheça os cursos tecnicos do SENAI!
      </p>
      <Cursos/>
    </>
  )
}

export default App
