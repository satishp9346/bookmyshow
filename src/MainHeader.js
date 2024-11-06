import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
function MainHeader() {
  const popularCities=useSelector((state)=>{return state.popularCities})
  const SelectedCityName=useSelector(state=>{return state.SelectedCityName})
  const dispatch=useDispatch();

  const data=useSelector((state)=>{return state});

  const [displayCities,setDisplayCities]=useState(true);
  const citiesStyle={
    display:displayCities?"block":"none"
  }
  const [index,setIndex]=useState(3);
  
  return (
    <div style={{position:"static",top:"0px",width:"100vw",zIndex:"1"}}>
        <div className='row' id='header'>
            <div className='col-sm-1'></div>
            <div className='col-sm-2' id='logo'>
                <Link to='/' ><img src="https://in.bmscdn.com/webin/common/icons/logo.svg" height={50} width={140}/></Link>
            </div>
            <div className='col-sm-4' id='search'>
                <i class="fa fa-search"></i>
                <input type="search" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
            </div>
            <div className='col-sm-2'></div>
            <div className='col-sm-1' id='place' onClick={()=>{setDisplayCities(true)}}>
              {SelectedCityName}
              <span style={{"transform":"rotate(90deg)","padding": "0 5px","fontSize":"10px"}}>&#10095;</span>
            </div>
            <div className='col-sm-1' id='signin'><div className='btn btn-danger' style={{height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"15px"}}>Sign In</div></div>
            <div className='col-sm-1' id='menu'>
              <div>
              <div className='menu'></div>
              <div className='menu'></div>
              <div className='menu'></div>
              </div>
            </div>
        </div>
        <div className='citiesPopup' style={citiesStyle}>
          <div className='whole'>
            <div className='citySearch'>
              <i class="fa fa-search"></i>
              <input type="search" placeholder='Search for your city' />
            </div>
            <div style={{width:"100%",height:"10px",borderBottom:"1px solid lightgrey"}}></div>
            <div style={{width:"100%",textAlign:"center",padding:"10px 0"}}>Popular Cities</div>
            <div className='cities'> 
              {
                popularCities.map((item,idx)=>{
                  return(
                    <div style={{width:"7vw",textAlign:"center",padding:"0 5px"}} onClick={()=>{setIndex(idx);setDisplayCities(false);
                                                                                                dispatch({type:"SelectedCityName",payload:`${popularCities[idx].cityName}`})
                                                                                                data.MovieData.map((item)=>{if(item.location==SelectedCityName){
                                                                                                  dispatch({type:'SelectedListofMovies',payload:item.ListofMovies});
                                                                                                  dispatch({type:'SelectedListofTheaters',payload:item.ListofTheaters});
                                                                                                }})
                                                                                                }}>
                      {
                        (()=>{
                          if(index==idx){
                            return <div><img src={item.selectedImage}/></div> 
                          }
                          else{
                            return <div><img src={item.cityImage}/></div>
                          }
                        })()
                      }
                      {/* <div><img src={item.cityImage}/></div> */}
                      <div>{item.cityName}</div>
                    </div>
                  )
                })
              }
            </div>
            <div style={{width:"100%",textAlign:"center",color:"red",fontSize:"18px"}}>Select Your City</div>
          </div>
        </div>
    </div>
  )
}

export default MainHeader