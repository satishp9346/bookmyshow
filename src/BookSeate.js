import React,{useState} from 'react'
import SeateBooking from './SeateBooking'
import './App.css'
import Header from './Header';
import Footer from './Footer'
import { useDispatch } from 'react-redux';
function BookSeate(props) {
  const dispatch=useDispatch();
  const [a,setA]=useState();
  const Satthi=(data)=>{
    setA(data);
  }
  return (
    <div>
        <Header data={Satthi}></Header>
        <SeateBooking count={a} ></SeateBooking>
        <Footer></Footer>
    </div>
  )
}

export default BookSeate