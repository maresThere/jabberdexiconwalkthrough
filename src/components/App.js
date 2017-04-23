import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Entry from './Entry'
import Browse from './Browse'
import Home from './Home'
import { get } from './Api'

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('')
class App extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({ entries })
    })
  }
  render () {
    return <Router>
      <div className='App'>
        <header>
          <h1><Link to='/'>The Jabberdexicon</Link></h1>
          <form action='#'>
            <input type='search' />
          </form>
        </header>
        <nav>
          <ul>
            {ALPHA.map((letter) => (
              <li key={letter}>
                <NavLink to={`/browse/${letter}`}>{letter}</NavLink>
              </li>
            ))}
            <li><NavLink to='/browse/0'>#</NavLink></li>
          </ul>
        </nav>
        <main>
          <Route exact path='/' render={(props) => (
            <Home entries={this.state.entries} {...props} />
            )} />
          <Route exact path='/browse/:to' render={(props) => (
            <Browse entries={this.state.entries} {...props} />
              )} />
          <Route path='/entry/:slug' render={(props) => (
            <Entry term='foo' definition='lorem Ipsonium' {...props} />
        )} />
        </main>
        <footer>
          <button>Add an Entry</button>
        </footer>
      </div>
    </Router>
  }
}

export default App
