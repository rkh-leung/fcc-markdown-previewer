import React, { useState } from 'react'
import marked_1 from 'marked/lib/marked.esm'

export const Preview = ({ markdown }) => {
  const [input] = useState()
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
    <div
      id={'preview'}
      dangerouslySetInnerHTML={{
        __html: marked_1(markdown, opts),
      }}
    />
  )
}
