import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionInfo from './components/TransactionInfo'
import TransactionDetails from './components/TransactionDetails'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faRedo, faPhone, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faLock, faRedo, faPhone, faQuestionCircle)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TransactionInfo />
        <TransactionDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
