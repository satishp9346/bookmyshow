import React from 'react'
import './MainFooter.css'
import { useSelector } from 'react-redux'
function MainFooter() {
    const FooterData=useSelector((state)=>{return state.FooterData});
    const SelectedCityName=useSelector(state=>{return state.SelectedCityName});
    
  return (
    <div>
        <div className='wholeFooter'>
            <div className='r1'>
                <div className='r1_c1'>
                    <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" />
                    <h4>List your Show</h4>
                    <h5>Got a show, event, activity or a great experiance? Partner with us & get listed on BookMyShow</h5>
                </div>
                <div className='r1_c2'>
                    <button >Contact today!</button>
                </div>
            </div>
        </div>

        <div className='r2'>
            <div className='r2_c1'>
                <img src="../Images/Customer_Care.png" />
                <p>24/7 CUSTOMER CARE</p>
            </div>
            <div className='r2_c2'>
                <img src="../Images/Resend_Booking.png" />
                <p>RESEND BOOKING CONFIRMATION </p>
            </div>
            <div className='r2_c3'>
                <img src="../Images/NewsLetter.png" />
                <p>SUBSCRIBE TO THE NEWSLETTER</p>
            </div>
        </div>

        <div className='r3'>
            {
                FooterData.map((item,id)=>{
                    return(
                        <div>
                            <div className='r3_c1'>
                                {
                                    (()=>{
                                        if(id==0 || id==1 || id==4){
                                            return <h5>{item.header}{SelectedCityName.toUpperCase()}</h5>
                                        }
                                        else{
                                            return  <h5>{item.header}</h5>
                                        }
                                    })()
                                }
                               
                            </div>
                            <div className='r3_c2'>
                                {
                                    item.movieList.map(val=><span>{val}</span>)
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='r4'>
            <div className='r4_c1'></div>
            <div className='r4_c2'>
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" />
            </div>
            <div className='r4_c3'></div>
        </div>

        <div className='r5'>
            <img src="../Images/iconImages.png" alt="" />
        </div>
        <div className='r6'>
            <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
            <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is promote the works and no endorsement of the artist shall be implied.</p>
            <p>Unauthorized use is prohibited and punishable by law.</p>
        </div>

    </div>
  )
}

export default MainFooter