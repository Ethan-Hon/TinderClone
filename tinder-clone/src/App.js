import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
function App() {
  return (
    <div className="App">
      {/* Header */}
        <Header />
      {/* {TinderCard} */}
      <TinderCards />
      {/* SwipeButton */}
      <SwipeButtons />
    </div>
  );
}

export default App;
