import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import FormBox from './components/FormBox'
import { Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';
import bgImage from './images/background-image.jpg';
import mobImage from './images/mobile-image.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  },[]);
  
  return windowWidth;
};

function App() {
  let windowWidth = useWindowWidth();
  const imageUrl = windowWidth >= 650 ? bgImage : mobImage;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element=<div className="App">
            <Image src={ imageUrl } className='background-image' />
            <Header />
            <Row>
              <Col md='3' />
              <Col md='6'>
                <FormBox />
              </Col>
              <Col md='3' />
            </Row>
          </div>
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
