import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import EntryList from './EntryList'

const Home = ({ entries }) => (
  <div className='Home'>
    <img src='' alt='' />
    <h2 className='learn'>Learn More about Terms Like:</h2>
    <ul className='random'>
      <EntryList entries={_.sampleSize(entries, 6)} />
    </ul>
  </div>
)

export default Home
