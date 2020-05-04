import React, { Component } from 'react'
import NavigationContainer from './components/Navigation/NavigationContainer'
import './css/App.css'
import FooterContainer from './components/Footer/FooterContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends Component {

  state = { "location": "/" }

  render() {
    return (
      <div>
        <Router>
          

          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <FooterContainer />
        </Router>
      </div>
    )
  }
}

export default App