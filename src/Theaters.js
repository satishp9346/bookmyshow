import React from 'react'
import { Link } from 'react-router-dom'
function Theaters() {
  return (
    <div>
      <div className='mvname'>
          Sapta Sagaralu Dhaati (Side B) (Telugu) - Telugu
      </div>
      <div className='row' id='second'>
        <div className='col-sm-4' >
          Calender
        </div>
        <div className='col-sm-3'></div>
        <div className='col-sm-5'>
          <div className='row'>
            <div className='col-sm-4'>
              Select Language
            </div>
            <div className='col-sm-4'>
              Filter Price range
            </div>
            <div className='col-sm-4'>
              Filter Show timmings
            </div>
          </div>
        </div>
      </div>
      <div claassName='theater'> 
        <div className='row' id='theater_1'>
          <div className='col-sm-4'>
            Platinum Movie Cinemas: Ameerpet
          </div>
          <div className='col-sm-4'>
            <Link to='/BookSeate'>
              <div>07:45 PM</div>
            </Link>
            <li>Non-cancellable</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theaters