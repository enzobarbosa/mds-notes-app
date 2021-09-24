import './App.css';
import React from 'react';
import Modal from 'react-modal'
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Notes from './pages/Notes';
import About from './pages/About';
import Home from './pages/Home';

Modal.setAppElement('#root')

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/notes'>
              <Notes />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
