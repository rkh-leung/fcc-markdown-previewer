import React, { useState } from 'react'
import marked_1 from 'marked/lib/marked.esm'
import './App.css'

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
  **bold text**
  ![Picture of FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

  const [input, setInput] = useState(markdown)
  const handleChange = (e) => setInput(e.target.value)
  const markedOpts = {
    sanitize: true,
    gfm: true,
    breaks: true,
  }

  return (
    <div className='App'>
      <header className='App-header'>Markdown Previewer</header>
      <textarea id={'editor'} value={input} onChange={handleChange} />
      <div
        id={'preview'}
        dangerouslySetInnerHTML={{
          __html: marked_1(input, markedOpts),
        }}
      />
    </div>
  )
}

export default App
