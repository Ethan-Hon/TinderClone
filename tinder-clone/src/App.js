import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
function App() {
  return (
    <div className="App">
      {/* Header */}
        <Header />
      {/* {TinderCard} */}
      <TinderCards />
      {/* SwipeButton */}
    </div>
  );
}

export default App;
