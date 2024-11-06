import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Amovie.css';
import { useSelector,useDispatch } from 'react-redux';
function Amovie() {
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const storedata=useSelector((state)=>{return state;})
    let data={}
    storedata.moviedata.map(item=>{if(storedata.moviename==item.mvname){data=item}});

    const SelectedMovieData=useSelector(state=>{return state.SelectedMovieData})

    const Viewbooknow={
        display:(data.date=="No watch options")?"none":"flex"
    }

    const [languagePopupStyle,setLanguagePopup]=useState({
        display:"none"
    })
  return (
    <div>
        <div className='c'>
            <div className='image'>
                <img src={SelectedMovieData.backgroundimage} />
            </div>
            <div className='c1'>
                <div className='c1_1'><img src={SelectedMovieData.image} /></div>
                <div className='c1_2'>{SelectedMovieData.currentStatus}</div>
            </div>
            <div className='c2'>
                <div className='c2_1'>
                    <h1>{SelectedMovieData.mvname}</h1>
                </div>
                {   
                    (()=>{if(SelectedMovieData.currentStatus=="In cinemas" || SelectedMovieData.currentStatus=="No watch options"){
                        return <div className='c2_2'>
                                    <i class="fa fa-star" style={{paddingTop:"15px",fontSize:"30px",color:"rgb(243, 59, 90)"}}></i>
                                    <h2>{SelectedMovieData.rating}</h2>
                                    <h4>{SelectedMovieData.review} Votes</h4>
                                </div>
                        }
                        else{
                            return <div className='c2_2'>
                                        <i class="fa fa-thumbs-up" style={{paddingTop:"20px",fontSize:"25px",color:"green"}}></i>
                                        <h2>{SelectedMovieData.review}</h2>
                                        <h4>are intrested</h4>
                                    </div>
                        }
                    })()
                }
                <div className='c2_3'>
                <div className='c2_3_1'>
                        <p style={{fontSize:"23px",fontWeight:"bold",paddingTop:"10px"}}>{data.date}</p>
                        <p>Are you intrested in watching this movie?</p>
                </div>
                <div className='c2_3_2'>
                    <button>I'm intrested</button>
                </div>
                </div>
                <div className='c2_4'>
                    <span>{SelectedMovieData.type.map(item=><span>{item}, </span>)}</span>
                    <span>{SelectedMovieData.languages.map(item=><span>{item}, </span>)}</span>
                </div>
                <div className='c2_5'>
                    <h3 style={{color:"#fff",fontSize:"18px"}}>{SelectedMovieData.duration}  •  {SelectedMovieData.mvtype.map(item=><span>{item}, </span>)} • {SelectedMovieData.certificate} • {SelectedMovieData.releaseDate}</h3>
                </div>
                <div className='c2_6'>
                    <button onClick={()=>{setLanguagePopup({display:"flex"})}} style={Viewbooknow} className='book'>Book tickets</button>

                </div>
            </div>
        </div>
        
        <div className='languagePopup' style={languagePopupStyle}>
            <div className='languagePopup1'>
                <div className='languagePopup1_1'>
                    <div className='languagePopup1_1_1'>
                        <p>{SelectedMovieData.mvname}</p>
                        <h2>Select language and format</h2>
                    </div>
                    <div className='languagePopup1_1_2' onClick={()=>{setLanguagePopup({display:"none"})}}>&#10005;</div>
                </div>
                {
                    SelectedMovieData.languages.map(item=>{
                        return(
                            <div className='languagePopup1_2'>
                                <div className='languagePopup1_2_1'>{item.toUpperCase()}</div>
                                <div className='languagePopup1_2_2'>{SelectedMovieData.type.map(value=><span onClick={()=>{navigate('/Theaters');dispatch({type:'SelectedLanguage',payload:item});dispatch({type:'SelectedViewType',payload:value})}}>{value}</span>)}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

        <div className='d'>
            <div className='about'>
                <h2>About the movie</h2>
                <h4>{SelectedMovieData.about}</h4>
            </div>    
            <div className='cast'>
                <h2>Cast</h2>
                <div style={{display:"flex"}}>
                {
                    SelectedMovieData.cast.map(item=>{
                        return(
                            <div>
                                <div className='img'><img src={item.img} /></div>
                                <div className='Name'>{item.Name}</div>
                                <div className='proff'>{item.proff}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div> 
            <div className='crew'>
                <h2>Crew</h2>
                <div style={{display:"flex"}}>
                {
                    SelectedMovieData.crew.map(item=>{
                        return(
                            <div>
                                <div className='img'><img src={item.img} /></div>
                                <div className='Name'>{item.Name}</div>
                                <div className='proff'>{item.proff}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>        
        </div>


    </div>
  )
}

export default Amovie;