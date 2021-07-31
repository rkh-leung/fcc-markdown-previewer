import React, { useState } from 'react'
import marked_1 from 'marked/lib/marked.esm'

export const MarkdownPreview = ({ markdown }) => {
  const [input, setInput] = useState(markdown)
  const handleChange = (e) => setInput(e.target.value)
  const opts = {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false,
  }
  return (
    <>
      <textarea id={'editor'} value={input} onChange={handleChange} />
      <div
        id={'preview'}
        dangerouslySetInnerHTML={{
          __html: marked_1(markdown, opts),
        }}
      />
    </>
  )
}
