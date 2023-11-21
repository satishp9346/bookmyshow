import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-5'>
                <div className='foot'>
                    <div className='box1'></div>
                    <div className='content'>Bestseller <i className='fa fa-info-circle' style={{backgroundColor:"rgba(0, 0, 0, 0.585)",color:"#fff",border:"1px solid rgba(0, 0, 0, 0.585)",borderRadius:"50%"}}></i></div>
                    <div className='box2'></div>
                    <div className='content'>Available</div>
                    <div className='box3'></div>
                    <div className='content'>Selected</div>
                    <div className='box4'></div>
                    <div className='content'>Sold</div>
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    </div>
  )
}

export default Footer