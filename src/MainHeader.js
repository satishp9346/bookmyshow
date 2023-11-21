import React from 'react'
import { Link } from 'react-router-dom'
function MainHeader() {
  return (
    <div style={{position:"static",top:"0px",width:"100vw",zIndex:"1"}}>
        <div className='row' id='header'>
            <div className='col-sm-1'></div>
            <div className='col-sm-2' id='logo'>
                <Link to='/' id='logo'><img src="https://image.pitchbook.com/ddkTQSqhSyHzo13V3H0rP4wZ1ie1590863551796_200x200" height={150} width={200}/></Link>
            </div>
            <div className='col-sm-4' id='search'>
                <i class="fa fa-search"></i>
                <input type="search" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
            </div>
            <div className='col-sm-2'></div>
            <div className='col-sm-1' id='place'>place</div>
            <div className='col-sm-1' id='signin'><div className='btn btn-danger'>Sign In</div></div>
            <div className='col-sm-1' id='menu'>Menu</div>
        </div>
    </div>
  )
}

export default MainHeader