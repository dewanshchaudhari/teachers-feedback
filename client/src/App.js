import './App.css';
import React from 'react';
// import { useEffect, useState } from 'react';
import Nav from './Nav';
import Form from './Form';
import Results from './Results';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
function App() {

  // useEffect(() => {
  //   fetch()
  // }, [])
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route exact path="/home" component={Form} ></Route>
        <Route exact path="/results" component={Results} ></Route>
      </Router>
      {/* <Form /> */}
    </div >
  );
}

export default App;
