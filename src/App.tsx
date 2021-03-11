import React from 'react';
import logo from './logo.svg';
import { Header } from "./components/header"
import { Activities } from "./components/activities"
import './App.css';

function App() {
  return (
    <div className="App">
      {Header()}
      {Activities()}
    </div>
  );
}

export default App;
