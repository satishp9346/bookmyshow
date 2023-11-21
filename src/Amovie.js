import React from 'react'
import { useLocation ,Link} from 'react-router-dom';
import './Amovie.css';
function Amovie() {
    const location=useLocation();
    const data=new URLSearchParams(location.search);
    const backgroundimage=data.get('backgroundimage');
    const image=data.get('image');
    const mvname=data.get('mvname');
    const review=data.get('review');
    const date=data.get('date');
    const duration=data.get('duration');
  return (
    <div>
    <div className='c'>
        <div className='image'>
            <img src={backgroundimage} />
        </div>
        <div className='c1'>
            <div className='c1_1'><img src={image} /></div>
            <div className='c1_2'>{date}</div>
        </div>
        <div className='c2'>
            <div className='c2_1'>
                <h1>{mvname}</h1>
            </div>
            <div className='c2_2'>
                <i class="fa fa-thumbs-up" style={{paddingTop:"20px",fontSize:"25px",color:"green"}}></i>
                <h2>{review}</h2>
                <h4>are intrested</h4>
            </div>
            <div className='c2_3'>
               <div className='c2_3_1'>
                    <h3>{date}</h3>
                    <p>Are you intrested in watching this movie?</p>
               </div>
               <div className='c2_3_2'>
                <button>I'm intrested</button>
               </div>
            </div>
            <div className='c2_4'>
                <span>2D</span>
                <span>Telugu</span>
            </div>
            <div className='c2_5'>
                <h3 style={{color:"#fff",fontSize:"18px"}}>{duration}</h3>
            </div>
            <div className='c2_6'>
                <Link to='/Theaters' className='book'>Book tickets</Link>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Amovie;