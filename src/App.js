import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Area1 from './components/area1';
import Area2 from './components/area2';
import Area3 from './components/area3';
import Area4 from './components/area4';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <Area1 />
      <br />
      <Area2 />
      <br />
      <Area3 />
      <br />
      <Area4 />
      <br />
      <Footer />
    </>
  );
}

export default App;
