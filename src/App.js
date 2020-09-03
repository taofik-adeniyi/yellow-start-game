import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import About from './components/About'
import DashBoard from './components/Dashboard'
import Help from './components/Help'
import Profile from './components/Profile'
import LeaderBoard from './components/LeaderBoard'
import PredictGames from './components/PredictGames'

function App() {

  return (      
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={About} />
              <Route path="/dashboard" exact component={DashBoard} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/help" exact component={Help} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/predictgames" exact component={PredictGames} />  
            </Switch>
          </div>
        </Router>
  )
}


export default App;