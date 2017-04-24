import React, { Component } from 'react'
import { get } from './Api'
import EntryList from './EntryList'
class Search extends Component {
  state = {
    query: null,
    entries: []
  }

  doSearch () {
    const query = this.props.match.params.query
    if (query !== this.state.query) {
      get('/entries', query).then(entries => this.setState({ entries, query }))
    }
  }

  componentDidMount () {
    this.doSearch()
  }

  componentDidUpdate () {
    this.doSearch()
  }

  render () {
    return <div className='Search'>
      <h3>Search for "{this.props.match.params.query}"</h3>
      <EntryList entries={this.state.entries} />
    </div>
  }
}

export default Search
