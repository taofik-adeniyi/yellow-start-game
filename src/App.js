import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import './App.css'
import HomePage from './components/HomePage'
import About from './components/About'
import DashBoard from './components/Dashboard'
import User from './components/User'

function App() {

  return (      
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={About} />
              <Route path="/dashboard" exact component={DashBoard} />
              <Route path="/user/:username" exact component={User} />
              {/* <Route path="/user" exact render={({match}) => (
                  <User username="match.params.username"/>
              )
              } /> */}
            </Switch>
          </div>
        </Router>
  )
}


export default App;