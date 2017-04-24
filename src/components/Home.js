import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import EntryList from './EntryList'
import robot from '../images/robot.jpg'

const Home = ({ entries }) => (
  <div className='Home'>
    <img src={robot} alt='robot meditating' />
    <h2 className='learn'>Learn More About Terms Like:</h2>
    <ul className='random'>
      <EntryList entries={_.sampleSize(entries, 6)} />
    </ul>
  </div>
)

export default Home
