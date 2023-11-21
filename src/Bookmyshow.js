import React,{useState} from 'react'
import { Link } from 'react-router-dom';

            
function Bookmyshow() {
  const moviedata=[
    {
      image:"../images/keedaa.png",
      mvname:"Keedaa Cola",
      mvtype:"Comedy/Crime",
      backgroundimage:"../images/keedaabackgroundimage.png",
      review:"28.5K",
      date:"In cinemas",
      duration:"2h • Comedy, Crime, • UA • 3 Nov, 2023"
    },
    {
      image:"../images/vidhi.png",
      mvname:"Vidhi",
      mvtype:"Crime/Thriler",
      backgroundimage:"../images/vidhibackgroundimage.png",
      review:"16.1K",
      date:"Releasing on 3 Nov, 2023",
      duration:"1h 47m 1h 47m • Crime, Thriller • UA"
    },
    {
      image:"../images/bagavanth_kesari.png",
      mvname:"Bhagavanth Kesari",
      mvtype:"Action/Drama",
      backgroundimage:"../images/bagavanthkesaribackgroungimage.png",
      review:"125.4K",
      date:"In cinemas",
      duration:"2h 44m • Action, Drama • UA • 19 Oct, 2023"
    },
    {
      image:"../images/polimera2.png",
      mvname:"Maa Oori Polimera 2",
      mvtype:"Crime/Thriller",
      backgroundimage:"../images/polimera2backgroundimage.png",
      review:"30.9K",
      date:"In cineams",
      duration:"2h 7m • Crime, Thriller • A • 3 Nov, 2023"
    },
    {
      image:"../images/leo.png",
      mvname:"Leo",
      mvtype:"Action/Thriller",
      backgroundimage:"../images/leobackgroundimage.png",
      review:"465.4K",
      date:"In cineams",
      duration:"2h 44m • Action, Thriller • UA • 19 Oct, 2023"
    }
  ]
  const arrofimages=[
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698646009192_hitexdesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1696847878393_comiconhyddesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1696330786937_mamadesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1697187201758_islhyddesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1698931897748_mindfoolvirdasdesktop.jpg",
  ]
  const [b,setB]=useState(0);
  setTimeout(()=>{
    if(b==arrofimages.length-1){setB(0)}else{setB(b+1)}
  },5000);
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
          <h1>Recommended Movies</h1>
        </div>
        <div className='b2' style={{display:"flex",paddingLeft:"50px"}}>
          
          {moviedata.map(item=>{
            return(
                <Link className='link' to={`/Amovie?backgroundimage=${item.backgroundimage}&image=${item.image}&mvname=${item.mvname}&review=${item.review}&date=${item.date}&duration=${item.duration}`}>
                    <div className='b2_1' style={{padding:"10px"}}>
                        <img src={item.image} width={230} height={380} style={{borderRadius:"10px"}}/>
                        <div className='b2_1_1'>
                        {item.mvname}
                        </div>
                        <div className='b2_1_2'>
                        {item.mvtype}
                        </div>
                    </div>
                </Link>
            );
          })} 
        </div>
    </div>
  )
}

export default Bookmyshow