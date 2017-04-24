import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Entry from './Entry'
import NewEntry from './NewEntry'
import Search from './Search'
import SearchForm from './SearchForm'
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
          <h1><Link to='/'>The <span>J</span>abberdexicon</Link></h1>
          <SearchForm />
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
          <hr />
        </nav>
        <main>
          <Route exact path='/' render={(props) => (
            <Home entries={this.state.entries} {...props} />
            )} />
          <Route exact path='/browse/:to' render={(props) => (
            <Browse entries={this.state.entries} {...props} />
              )} />
          <Route path='/entry/:slug' component={Entry} />
          <Route path='/new' component={NewEntry} />
          <Route path='/search/:query' component={Search} />
        </main>
        <footer>
          <Link to='/new'>Add an Entry</Link>
        </footer>
      </div>
    </Router>
  }
}

export default App
