import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Bookmyshow from './Bookmyshow';
import Amovie from './Amovie';
import MainHeader from './MainHeader';
import Navbar from './Navbar';
import Theaters from './Theaters';
import BookSeate from './BookSeate';
import { useSelector } from 'react-redux';
import QRvalidation from './QRvalidation';
import MainFooter from './MainFooter';
function App() {
  const displayheader=useSelector((state)=>{return state.displayheader})
  const displaystyle={
    display:(displayheader)?"block":"none"
  }
  return (
    <div>
      <Router>
        <div style={displaystyle}>
          <MainHeader ></MainHeader>
          <Navbar ></Navbar>
        </div>    
        <div>
          <Routes>
            <Route path='/' element={<Bookmyshow />}></Route>
            <Route path='/Theaters' element={<Theaters />}></Route>
            <Route path='/BookSeate' element={<BookSeate />}></Route>
            {/* <Route path='/UpcomingMovies' element={<UpcomingMovies />}></Route> */}
            {/* <Route path='/NearbyEvents' element={<NearbyEvents />}></Route> */}
            <Route path='/Amovie' element={<Amovie />}></Route>
            <Route path='/QRvalidation' element={<QRvalidation />}></Route>
          </Routes>
        </div>
        <div style={displaystyle}>
          <MainFooter />
        </div>
      </Router>
        
    </div>
  );
}

export default App;