import React from 'react';
import './pages/landing/style.css';
import Header from './components/app/Header';
import About from './pages/landing/About'; 
import BlogPage from './pages/blog/Blog'; 
import MainSection from './pages/landing/MainSection';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 
// import Footer from './components/app/Footer';

export default function App() {     
  return (   
      <Router>
        <Header /> 
        <Switch> 
          <Route
            path="/" exact > 
            <MainSection /> 
          </Route> 
          <Route 
            path="/about" > 
            <About /> 
          </Route>  
          <Route 
            path="/blog">
            <BlogPage />  
          </Route> 
        </Switch>
      </Router>
    )
  }