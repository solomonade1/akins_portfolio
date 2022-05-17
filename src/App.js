import React from 'react';
import {Navbar } from './components';


import './App.scss';
import {About, Header, Footer, Works, Skills, Testimonials} from './container'


const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Works />
    <Skills />
    <Testimonials />
    <Footer />

  </div>
);

export default App;