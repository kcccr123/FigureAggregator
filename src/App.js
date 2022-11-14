import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './homepage';
import SearchResults from './searchresultsURL';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />\
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
