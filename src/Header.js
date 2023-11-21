import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Header.css'
function Header(props) {
    const history=useNavigate();
    const [a,setA]=useState(true);
    const [b,setB]=useState(1);
    const [x,setX]=useState(2);
    // const [head,setHead]=useState(true);
    const getStyle=(data)=>{
        if(data==x){
            return {backgroundColor:"rgb(252, 37, 55)",color:"#fff"}
        }
        else{
            return {backgroundColor:"#fff",color:"black"}
        }
    }
    props.data(x);
    const popup={
        display:a?"block":"none"
    }
    const arr=["../Images/cycle1.png",
               "../Images/scooty1.png",
               "../Images/auto1.png",
               "../Images/car(4seates).png",
               "../Images/car(5&6seates).png",
               "../Images/car(5&6seates).png" 
              ]
  return (
    <div className='container-fluid' id='header-container-fluid'>
        <div className='row'>
            <div className='col-md-9'>
                <div className='one' onClick={()=>{history('/Theaters')}} >&#10094;</div>
                <div className='two'>
                    <h5>Tiger 3 <span style={{border:"1px solid #fff",borderRadius:"50%",padding:"2px",fontSize:"10px"}}>UA</span></h5>
                    <strong>Platinum Movie Cinemas: Ameerpet | Today, 15 Nov, 10:00 PM</strong>
                </div>
            </div>
            <div className='col-md-2' id='three'>
                <div className='three' style={{cursor:"pointer"}} onClick={()=>{setA(true);}} >{x} Tickets <i class="fa fa-pencil" style={{fontSize:"13px",padding:"0px 0 0 10px"}}></i></div>
            </div>
            <div className='col-md-1' id='four' onClick={()=>{history('/Theaters')}} >
                &#10005;
            </div>
        </div>

        <div className='popup' style={popup}>
              <div className='row'>
                  <div className='col-md-4'></div>
                  <div className='col-md-4' id='popup_1'>
                      <div className='popup_1'>How Many Seates?</div>
                      <div className='popup_2'>
                        <img src={arr[b]} width={180} height={100} />
                      </div>
                      <div className='popup_3'>
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-1'></div>
                            <div className='col-md-1'></div>
                            <div className='col-md-1' style={getStyle(1)} id='count' onMouseOver={()=>{setB(0)}} onClick={()=>{setX(1)}}>1</div>
                            <div className='col-md-1' style={getStyle(2)} id='count' onMouseOver={()=>{setB(1)}} onClick={()=>{setX(2)}}>2</div>
                            <div className='col-md-1' style={getStyle(3)} id='count' onMouseOver={()=>{setB(2)}} onClick={()=>{setX(3)}}>3</div>
                            <div className='col-md-1' style={getStyle(4)} id='count' onMouseOver={()=>{setB(3)}} onClick={()=>{setX(4)}}>4</div>
                            <div className='col-md-1' style={getStyle(5)} id='count' onMouseOver={()=>{setB(4)}} onClick={()=>{setX(5)}}>5</div>
                            <div className='col-md-1' style={getStyle(6)} id='count' onMouseOver={()=>{setB(5)}} onClick={()=>{setX(6)}}>6</div>
                            <div className='col-md-1'></div>
                            <div className='col-md-1'></div>
                            <div className='col-md-1'></div>   
                        </div>
                      </div>
                      <div className='popup_4'>
                        <p style={{color:"rgba(0,0,0,0.589)"}}>SILVER CLASS</p>
                        <h5>Rs. 295.00</h5>
                        <p style={{color:"green"}}>Available</p>
                      </div>
                      <div className='btn btn-primary' id='btn' onClick={()=>{setA(false)}}>Select Seates</div>
                  </div>
                  <div className='col-md-4'></div>
              </div>
          </div>

    </div>
  )
}

export default Header