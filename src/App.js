import  React from 'react';
// import './App.css';
import Navbar from './components/Navigation/Navbar';
import Section from './components/Section/Section';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Card/Card.js";
function App() {

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path ="login" element={<Login/>}/>
          <Route exact path="/" element = {<Section/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
