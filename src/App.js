import './App.css'
import { Editor } from './components/editor'
import { Preview } from './components/preview'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Editor />
        <Preview />
        <div id={'preview'} />
      </header>
    </div>
  )
}

export default App
