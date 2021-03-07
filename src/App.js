import React from 'react';
import './App.css';
import {Button, Jumbotron} from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import { Fragment } from 'react';


function App() {
  return (
    <div>
      <h1>React Bootstrap</h1>
      <Fragment></Fragment>
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
