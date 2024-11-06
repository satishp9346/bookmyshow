import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
function Header(props) {
    const storeData=useSelector((state)=>{return state})
    const SelectedTheaterData=useSelector(state=>{return state.SelectedTheaterData});
    const SelectedMovieData=useSelector(state=>{return state.SelectedMovieData});

    const history=useNavigate();
    const dispatch=useDispatch()
    const [a,setA]=useState(true);
    const [b,setB]=useState(1);
    const [x,setX]=useState(2);
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
                <div className='one' onClick={()=>{history('/Theaters');dispatch({type:"displayheader",payload:true})}} >&#10094;</div>
                <div className='two'>
                    <h5>{SelectedMovieData.mvname} <span style={{border:"1px solid #fff",borderRadius:"50%",padding:"3px",fontSize:"8px"}}>{SelectedMovieData.certificate}</span></h5>
                    <strong>{SelectedTheaterData.TheaterName} | {storeData.fixDay}, {storeData.fixDate} {storeData.fixMonth}, {storeData.SelectedTiming}</strong>
                </div>
            </div>
            <div className='col-md-2' id='three'>
                <div className='three' style={{cursor:"pointer"}} onClick={()=>{setA(true);}} >{x} Tickets <i class="fa fa-pencil" style={{fontSize:"13px",padding:"0px 0 0 10px"}}></i></div>
            </div>
            <div className='col-md-1' id='four' onClick={()=>{history('/Theaters');dispatch({type:"displayheader",payload:true})}} >
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
                      <div style={{display:"flex"}}>
                      <div className='popup_4'>
                        <p style={{color:"rgba(0,0,0,0.589)"}}>SEMI RECLINER</p>
                        <h5>Rs. 300.00</h5>
                        <p style={{color:"green"}}>Available</p>
                      </div>
                      <div className='popup_4'>
                        <p style={{color:"rgba(0,0,0,0.589)"}}>SILVER CLASS</p>
                        <h5>Rs. 245.00</h5>
                        <p style={{color:"green"}}>Available</p>
                      </div>
                      </div>
                      <div className='btn btn-primary' id='btn' onClick={()=>{setA(false);dispatch({type:"SeateCount",payload:x})}}>Select Seates</div>
                  </div>
                  <div className='col-md-4'></div>
              </div>
          </div>

    </div>
  )
}

export default Header