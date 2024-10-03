import React from 'react';
import Newsletter from './Newsletter';
import Explore from './Explore';
import Support from './Support';
import StayConnected from './StayConnected';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEV@Deakin</h1>
      </header>
      <main>
        <div className="newsletter-section">
          <Newsletter />
        </div>
        <div className="sections">
          <Explore />
          <Support />
          <StayConnected />
        </div>
      </main>
      <footer>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </footer>
    </div>
  );
}

export default App;
