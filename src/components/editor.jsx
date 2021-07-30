import React, { Component } from 'react'

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
        <textarea id={'editor'} />
    )
  }
}
