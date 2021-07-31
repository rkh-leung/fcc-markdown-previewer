import React, { useState, useEffect } from 'react'
import marked_1 from 'marked/lib/marked.esm'

export const MarkdownPreview = ({ markdown }) => {
  const [input, setInput] = useState(markdown)
  const handleChange = (e) => setInput(e.target.value)
  const markedOpts = {
    sanitize: true,
    gfm: true,
    breaks: true,
  }

  return (
    <>
      <textarea id={'editor'} value={input} onChange={handleChange} />
      <div
        id={'preview'}
        dangerouslySetInnerHTML={{
          __html: marked_1(input, markedOpts),
        }}
      />
    </>
  )
}
