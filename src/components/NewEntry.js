import React, { Component } from 'react'
import { post } from './Api'

class NewEntry extends Component {
  _submit = (event) => {
    event.preventDefault()
    post('/entries', {
      entry: {
        term: this.refs.term.value,
        definition: this.refs.definition.value
      }
    }).then((entry) => {
      this.props.history.push(`/entry/${entry.slug}`)
    })
  }
  render () {
    return <div className='NewEntry'>
      <h3>Add an Entry</h3>
      <form action='#' onSubmit={this._submit}>
        <p>
          <label>Term</label>
          <input type='text' ref='term' />
        </p>
        <p>
          <label>Definition</label>
          <textarea id='' cols='30' rows='10' ref='definition' />
        </p>
        <p>
          <button type='submit'>Save</button>
        </p>
      </form>
    </div>
  }
}

export default NewEntry
