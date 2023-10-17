import React from 'react';
import Navigation from './components/Navigation';
import './App.css'
import SearchInput from './components/SearchInput';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
        <Navigation />
        <SearchInput />
        <Card/>
    </div>
  );
}

export default App;
