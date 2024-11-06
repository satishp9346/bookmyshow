import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
function Theaters() {
  const redirect=useNavigate();
  const dispatch=useDispatch()
  const SelectedMovieData=useSelector(state=>{return state.SelectedMovieData});
  const SelectedListofTheaters=useSelector(state=>{return state.SelectedListofTheaters});
  const SelectedLanguage=useSelector(state=>{return state.SelectedLanguage});
  const SelectedViewType=useSelector(state=>{return state.SelectedViewType});

  const moviename=useSelector((state)=>{return state.moviename})
  const theaterdata=useSelector((state)=>{return state.theaterdata});
  const calender=useSelector((state)=>{return state.calender})
  const calenderStyle=useSelector(state=>{return state.calenderStyle})
  const calenderstyle={
   backgroundColor: "rgba(249, 36, 83, 0.92)",
   color:"#fff" 
  }
  const [a,setA]=useState(false);
  const calenderButtonStyle={
    transform:(a)?"translateX(-170px)":"translateX(0px)"
  }
  return (
    <div>
      <div className='mvname'>
        <div >
          <h1 style={{fontSize:"35px"}}>{SelectedMovieData.mvname} ({SelectedLanguage}) - {SelectedLanguage}</h1>
          <span className='mvtype'>{SelectedMovieData.certificate}</span>
          {
            SelectedMovieData.mvtype.map(item=><span className='lang'>{item.toUpperCase()}</span>)
          }
        </div>
      </div>
      <div className='row' id='second'>
        <div className='col-sm-4' style={{backgroundColor:"#fff",height:"70px"}}>
          <div className='calender'>
            <button className='calenderleft'onClick={()=>{setA(false)}}>&#10094;</button>
            <div className='calender_2'>
            <div className='calender_1' style={calenderButtonStyle}>
              {calender.map((item,indx)=>{
                if(calenderStyle[indx]){
                  return(
                    <div className='calender_1_1' style={calenderstyle}>
                      <p>{item.day}</p>
                      <p style={{fontSize:"17px"}}>{item.date}</p>
                      <p>{item.month}</p>
                    </div>
                  )  
                }
                else{
                  return(
                    <div className='calender_1_1' onClick={()=>{dispatch({type:"calenderStyle",payload:indx})}}>
                      <p>{item.day}</p>
                      <p style={{fontSize:"17px"}}>{item.date}</p>
                      <p>{item.month}</p>
                    </div>
                  )
                } 
                })}
            </div>
            </div>
            <button className='calenderright' onClick={()=>{setA(true)}}>&#10095;</button>
          </div>
        </div>
        <div className='col-sm-3'></div>
        <div className='col-sm-5'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='language'>
                {SelectedLanguage} - {SelectedViewType}
                <button className='language_1'>&#10095;</button>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='filterPrice'>
                Filter Price range
                <button className='language_1'>&#10095;</button>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='filterTime'>
                Filter Show timmings
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id='theatersdata'>
        <div className='tp'></div> 
        {
          SelectedListofTheaters.map((item,index)=>{
            return(
              <>
              <div className='row' id='theater_1'>
                <div className='col-sm-4'>
                  <div claassName='theatername'>
                    <div style={{display:"flex",fontSize:"13px",fontWeight:"bold",padding:"20px 0"}}>
                      <i className='fa fa-heart-o' style={{color:"rgba(59, 59, 59,0.487)",fontSize:"17px",fontWeight:"bold",padding:"0 15px"}}/>
                      {item.TheaterName}
                    </div>
                    <div style={{display:"flex"}}>
                      <div style={{display:"flex",fontSize:"13px",color:"rgba(59, 248, 138, 0.847)"}}>
                        <i className="fa fa-mobile-phone" style={{fontSize:"28px",color:"rgba(59, 248, 138, 0.847)",padding:"0px 10px 0 50px",marginTop:"-8px"}}></i>
                        M-Ticket
                      </div>
                      <div style={{color:"orange",fontSize:"13px"}}>
                        <img src="../Images/fast-food.png" width={20} style={{margin:"-8px 10px 0 30px"}} />
                        Food & Beverage
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div>
                  {/* <div className='timehover' style={{display:"none"}}>
                    <div style={{width:"125px",textAlign:"center",lineHeight:"6px",paddingTop:"20px"}}>
                      <p style={{fontSize:'15px'}}>Rs. 295.00</p>
                      <p style={{fontSize:"10px"}}>SILVER CLASS</p>
                      <p style={{fontSize:"10px",color:"green"}}>Available</p>
                    </div>
                    <div style={{width:"125px",textAlign:"center",lineHeight:"6px",paddingTop:"20px"}}>
                      <p style={{fontSize:'15px'}}>Rs. 350.00</p>
                      <p style={{fontSize:'10px'}}>PLATINUM RECLI..</p>
                      <p style={{fontSize:'10px',color:"orange"}}>Filling Fast</p>
                    </div>
                  </div> */}
                  <div style={{display:"flex"}}>
                  {
                    item.timings.map((value,indx)=>{
                      return(
                        <div style={{paddingRight:"20px"}}>
                          <div className='time' onClick={()=>{
                            redirect('/BookSeate');
                            dispatch({type:'displayheader',payload:false});
                            dispatch({type:'SelectedTheaterData',payload:item});
                            dispatch({type:'SelectedTiming',payload:value});
                            }} ><p>{value}</p><p style={{fontSize:"9px"}}>{item.type}</p></div>
                        </div>
                      )
                    })
                  }
                  </div>
                  <div style={{display:"flex",fontSize:"13px",paddingTop:"10px"}}><li style={{width:"15px"}}/>Non-cancellable</div>
                </div>
                </div>
                <div claassName='col-sm-4'></div>
              </div>
            </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Theaters