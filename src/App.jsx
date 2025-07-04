import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import MyServices from './Components/MyServices';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <MyServices />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App