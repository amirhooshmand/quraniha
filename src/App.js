import React, { Component } from 'react'
import NavigationContainer from './components/Navigation/NavigationContainer'
import './css/App.css'
import FooterContainer from './components/Footer/FooterContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Surah from './pages/Surah'

class App extends Component {

  state = { "location": "/" }

  render() {
    return (
      <div>
        <Router>
          <NavigationContainer location={window.location.pathname} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            <Route path="/surah/:slug" component={Surah} />

            <Route component={NoMatch} />
          </Switch>

          <FooterContainer />
        </Router>
      </div>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default App