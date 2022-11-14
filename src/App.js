import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './webcomp/navbar';
import HomePage from './webcomp/homepage';
import SearchResults from './webcomp/searchresultsURL';

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
