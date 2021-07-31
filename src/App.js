import './App.css'
import { MarkdownPreview } from './components/markdown-preview'

function App() {
  const markdown = `# Header
  ## Sub header
  [title](https://google.com)
  > this is a code block
  1. first list
  2. second list
  \`\`\`
  function foo () {
  return "I am foo"
  }
  \`\`\`
  **bolded text**
  ![Picture of FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

  return (
    <div className='App'>
      <header className='App-header'>
        <MarkdownPreview markdown={markdown}/>
      </header>
    </div>
  )
}

export default App
