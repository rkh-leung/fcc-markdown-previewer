import './App.css'
import { Editor } from './components/editor'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Editor />
        <textarea id={'editor'} />
        <div id={'preview'} />
      </header>
    </div>
  )
}

export default App
