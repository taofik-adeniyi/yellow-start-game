import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import './App.css'
import HomePage from './components/HomePage'
import About from './components/About'
import DashBoard from './components/Dashboard'
import Help from './components/Help'
import Profile from './components/Profile'
import LeaderBoard from './components/LeaderBoard'

function App() {

  return (      
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={About} />
              <Route path="/dashboard" exact component={DashBoard} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/help" exact component={Help} />
              <Route path="/profile" exact component={Profile} />  
            </Switch>
          </div>
        </Router>
  )
}


export default App;