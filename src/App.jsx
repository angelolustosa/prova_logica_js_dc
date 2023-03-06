import { useEffect, useState } from 'react'
import './App.css'
import questoes from './questoes'
import CodeComponent from './components/CodeComponent'
import CodeComponent2 from './components/CodeComponent2'
import imc from './images/print_imc.png'
function App() {
  const [liList1, setLiList1] = useState()

  let loadPrint = q => {
    if (q?.image) {
      return <img id='print' src={q?.image} alt="imc_print" width={300} />
    }
  }

  let loadCodes = (q) => {
    if (q?.resposta?.snippet) {
      return <span className='reposta' style={{ marginLeft: '-12px' }}>
        <b style={{ marginLeft: `.8em` }}>
          <span style={{ color: 'green' }}>Resposta:</span>
        </b>
        <CodeComponent2 code={q?.resposta?.snippet} />
      </span>
    } else if (q?.code?.snippet) {
      return <CodeComponent2 code={q?.code?.snippet} />
    }
  }

  let loadAlternativas = q => {
    if (q.alternativas) {
      return <ol className='lista'>{q?.alternativas.map((i, index) => <li key={index}>{i}</li>)}</ol>
    }
  }

  let loadResposta = q => {
    if (!q?.resposta?.code) {
      return <span className='reposta' style={{ marginLeft: '-12px' }}><b style={{ marginLeft: `.8em` }}><span style={{ color: 'green' }}>Resposta:</span></b> {q?.resposta}</span>
    }
  }

  let loadLiEl1 = () => {
    let listaLis = questoes.map((q, index) =>
      <div key={index}>
        <li style={{ marginTop: '1em', fontWeight: 'bold' }}>{q.pergunta}</li>
        {loadPrint(q)}
        {loadCodes(q)}
        {loadAlternativas(q)}
        {loadResposta(q)}
      </div>
    )
    // console.log(listaLis)
    setLiList1(listaLis)
  }

  /* let loadLiEl = () => {
    let lis = questoes.map(q => {
      if (q.pergunta) {
        return <li>{q.pergunta}</li>
      }
    })
    return lis
  } */

  useEffect(() => {
    loadLiEl1()
    //loadLiEl()
  }, [])


  return (
    <div>
      <h1>Prova Lógica de JS</h1>


      <ol>
        {liList1}
      </ol>
      {/* <button className="btn btn-primary">Primary button</button> */}

      {/* <ol>
        {liList1}
        <ol className='lista'>
          <li>Lower-alpha type</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
      </ol> */}

      {/* <ol>
        {loadLiEl()}
      </ol> */}


      {/* <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div> */}
    </div>

  )
}

export default App
