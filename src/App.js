import React from 'react';

import './App.scss';
import { About, Footer, Skills, Header, Works, Testimonials } from './container';
import {Navbar } from './components';

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