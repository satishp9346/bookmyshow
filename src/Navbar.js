import React from 'react'

function Navbar() {
  return (
    <div style={{position:"static",top:"60px",zIndex:"1",width:"100vw"}}>
        <div className='row' id='navbar'>
            <div className='col-sm-7' id='navbar1'>
                <div className='row'>
                    <div className='col-sm-1' id='navbar1_1'>Movies</div>
                    <div className='col-sm-1' id='navbar1_1'>Stream</div>
                    <div className='col-sm-1' id='navbar1_1'>Events</div>
                    <div className='col-sm-1' id='navbar1_1'>Plays</div>
                    <div className='col-sm-1' id='navbar1_1'>Sports</div>
                    <div className='col-sm-1' id='navbar1_1' style={{marginRight:"15px"}}>Activities</div>
                    <div className='col-sm-1' id='navbar1_1'>Buzz</div>
                    <div className='col-sm-4' id='iplimg'>
                        <img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" height='19px' width='100%'/>
                    </div>
                </div>
            </div>
            <div className='col-sm-1'></div>
            <div className='col-sm-4' id='navend'>
                <div className='row'>
                    <div className='col-sm-3' id='navbar1_2' style={{paddingRight:"20px"}}>ListYourShow</div>
                    <div className='col-sm-3' id='navbar1_2'>Corporates</div>
                    <div className='col-sm-3' id='navbar1_2'>Offers</div>
                    <div className='col-sm-3' id='navbar1_2'>Gift Cards</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
