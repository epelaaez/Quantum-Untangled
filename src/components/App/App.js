import React from 'react';
import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

class App extends React.Component {
  componentDidMount() {
    if (window.location.hostname == "https://quantum-untangled-246b3.web.app" || window.location.hostname == "https://quantum-untangled-246b3.firebaseapp.com") {
        window.location.href = 'https://www.quantumuntangled.org'; 
    }
  }

  render() {
    return (
      <div className="App">        
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;