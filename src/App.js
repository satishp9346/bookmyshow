import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Bookmyshow from './Bookmyshow';
import Amovie from './Amovie';
import MainHeader from './MainHeader';
import Navbar from './Navbar';
import Theaters from './Theaters';
import BookSeate from './BookSeate';
function App() {
  // const [a,setA]=useState();
  // const Headdisplay=(data)=>{
  //   setA(data);
  //   console.log(data)
  // }
  return (
    <div>
      <Router>
        <div yy>
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
          </Routes>
        </div>
      </Router>
        
    </div>
  );
}

export default App;