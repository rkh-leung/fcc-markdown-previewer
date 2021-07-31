import React, { useState } from 'react'

export const Editor = ({markdown}) => {
  const [input, setInput] = useState(markdown)
  const handleChange = e => setInput(e.target.value)
  return <textarea id={'editor'} value={input} onChange={handleChange} />
}
