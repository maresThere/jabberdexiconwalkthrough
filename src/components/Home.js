import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import EntryList from './EntryList'

class Home extends Component {
  render () {
    return <div className='Home'>
      <img src='' alt='' />
      <h3>Random Entries</h3>
      <ul className='random'>

        <EntryList entries={_.sampleSize(this.props.entries, 4)} />
      </ul>

    </div>
  }
}

export default Home
