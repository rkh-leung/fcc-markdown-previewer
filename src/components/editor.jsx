import React, { useState } from 'react'

export const Editor = () => {
  const [input, setInput] = useState()
  return <textarea id={'editor'} />
}
