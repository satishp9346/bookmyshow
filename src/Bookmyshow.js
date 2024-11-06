import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
            
function Bookmyshow() {
  const data=useSelector((state)=>{return state})

  const dispatch=useDispatch();

  const ListofMovies=useSelector(state=>{return state.SelectedListofMovies})
  

  const arrofimages=data.sliderdata;

  const [b,setB]=useState(0);
  setTimeout(()=>{
    if(b==arrofimages.length-1){setB(0)}else{setB(b+1)}
  },5000);

  const [recmv,setRecmv]=useState(0);
  const recmvstyle={
    transform: (recmv==1)? "translateX(-91.5vw)":(recmv==2)?"translateX(-146.5vw)":"translate(0px)"
  }
  const recmvhideleftbutton={
    visibility:(recmv==0)?"hidden":"visible"
  }
  const recmvhiderightbutton={
    display:(recmv==1)?"none":"block"
  }
  return (
    <div>
        <div className='row' style={{height:"50vh",marginTop:"20px",width:"100vw"}}>
            <div className='col-sm-1' id='left'>
                <button className='left' onClick={()=>{if(b==0){setB(arrofimages.length-1)} else{setB(b-1)}}}>&#10094;</button>
            </div>
            <div className='col-sm-10' id='image'>
                <img className='slideimage' src={arrofimages[b]} />                
            </div>
            <div className='col-sm-1' id='right'>
                <button className='right' onClick={()=>{if(b==arrofimages.length-1){setB(0)}else{setB(b+1)}}}>&#10095;</button>
            </div>
        </div>
        

        <div className='b1'>
          <strong>Recommended Movies</strong>
        </div>
        <div className='recmv' style={{height:"500px",display:"flex"}}>
          <div className='recmv_1'>
            <button className='recmvleft' style={recmvhideleftbutton} onClick={()=>{setRecmv(recmv-1)}}>&#10094;</button>
          </div>
          <div className='recmv_2'>
            <div className='b2' style={recmvstyle}> 
              {ListofMovies.map(item=>{
                return(
                    <Link className='link' to={`/Amovie`}>
                        <div className='b2_1' style={{padding:"10px"}} onClick={()=>{dispatch({type:"setMvname",payload:item.mvname});dispatch({type:"SelectedMovieData",payload:item})}}>
                            <img src={item.image} width={230} height={380} style={{borderRadius:"10px"}}/>
                            <div className='b2_1_1'>
                            {item.mvname}
                            </div>
                            <div className='b2_1_2'>
                            {item.mvtype.map((val,i)=>{
                              if(i!=(item.mvtype.length-1)){
                                return <span>{val} </span>
                              }
                              else{
                                return <span>{val}</span>
                              }
                            })}
                            </div>
                        </div>
                    </Link>
                );
              })} 
            </div>
          </div>
          <div className='recmv_3'>
            <button className='recmvright' style={recmvhiderightbutton} onClick={()=>{setRecmv(recmv+1)}}>&#10095;</button>
          </div>
        </div>
        <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" width={1230} style={{margin:"60px"}} />
        </div>

        <div className='outerSlider'>
          <div className='innerSlider'>
            {
              arrofimages.map((item)=><img className='imageSlide' src={item} />)
            }
          </div>
        </div>
    </div>
  )
}

export default Bookmyshow