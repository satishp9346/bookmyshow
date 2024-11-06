import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
import axios from 'axios';
function QRvalidation() {
    const state=useSelector(state=>{return state});
    const SelectedTickets=state.SelectedTickets;
    console.log(SelectedTickets)
    let alphabet="";
    const seates=[];
    let RecOrGold="";
    (SelectedTickets[0].length!=0)?(()=>{RecOrGold="Recliner";
                                     alphabet=state.SelectedTheaterData.Alphabets[0][SelectedTickets[0][0][0]]
                                     SelectedTickets[0].map(item=>{
                                        seates.push(item.slice(2));
                                     });})()
                              :(()=>{RecOrGold="Gold";
                                     alphabet=state.SelectedTheaterData.Alphabets[1][SelectedTickets[1][0][0]]
                                     SelectedTickets[1].map(item=>{
                                       seates.push(item.slice(2));
                                     });})()


    let len1=4;
    let arr1='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let len2=6;
    let arr2='123456789'
    let ans1 = '';
    let ans2 = '';
    for (let i = len1; i > 0; i--) {
        ans1 += arr1[(Math.floor(Math.random() * arr1.length))];
    }
    for(let i=len2;i>0;i--){
        ans2 += arr2[(Math.floor(Math.random() * arr2.length))];
    }

    const [Name,setName]=useState("");
    const [displayScanner,setDisplayScanner]=useState(true)
    const displayTicketStyle={
        display:displayScanner?"none":"flex"
    }
    const displayScannerStyle={
        display:displayScanner?"block":"none"
    }

    useEffect(()=>{
        const getDbData=setInterval(()=>{
            axios.get('https://bsmserver.onrender.com/Getdata')
            .then((result)=>{return result.data})
            .then((data)=>{setDisplayScanner(data[0].displayButton);})
        },5000)
        return ()=>{
            clearInterval(getDbData)
        }
    },[])

    useEffect(()=>{
        axios.put('https://bsmserver.onrender.com/Updatedata/1',{
        totalAmount:state.TotalAmount,
        displayButton:displayScanner,
        Name:Name
        })
        .then((response)=>{console.log(response.data)})
        .catch((err)=>{console.log(err.message)})  
        
    },[Name]);
  return (
    <div>
        <div className='WholeTicketpage' style={displayTicketStyle} >
            <div className='ticket'>
                <div className='ticket1'>
                    <div className='ticket1_1'>
                        <img src={state.SelectedMovieData.image} />
                    </div>
                    <div className='ticket1_2'>
                        <h3>{state.SelectedMovieData.mvname} ({state.SelectedMovieData.certificate})</h3>
                        <p>{state.SelectedLanguage}, {state.SelectedViewType}</p>
                        <p>{state.fixDay}, {state.fixDate} {state.fixMonth} | {state.SelectedTiming}</p>
                        <p>{state.SelectedTheaterData.TheaterName}</p>
                    </div>
                    <div className='ticket1_3'>
                        <p>Box Office Pickup</p>
                    </div>
                </div>
                <div className='ticket2'>
                    <span style={{marginLeft: "-10px"}}></span>
                    <button>Tap for support, details & more actions</button>
                    <span style={{marginRight: "-10px"}}></span>
                </div>
                <div className='ticket3'>
                    <div className='ticket3_1'>
                        <QRCode value='Hello' style={{height:"80px",width:"80px"}} />
                    </div>
                    <div className='ticket3_2'>
                        <p>{state.SeateCount} Ticket(s)</p>
                        <h2>{state.SelectedTheaterData.TheaterName}</h2>
                        <h3>{RecOrGold} - {seates.map(item=><span>{alphabet}{item},</span>)}</h3>
                        <h4>BOOKING ID:{ans1}0000{ans2}</h4>
                    </div>
                </div>
                <div className='ticket4'>
                    Cancellation available : cut-off time of 4 hrs before showtime
                </div>
                <div className='ticket5'>
                    <span>Total Amount</span>
                    <span style={{float:'right'}}>Rs.{state.TotalAmount}.00</span>
                </div>
            </div>
        </div>
        <div className='container' style={displayScannerStyle}>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <div className='PageData'>
                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <label className='control-label col-sm-2' htmlFor="email">Email</label>
                                <div className='col-sm-10'>
                                    <input type="email" className='form-control' id='email' placeholder='Enter email' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-sm-2' htmlFor="email">Name</label>
                                <div className='col-sm-10'>
                                    <input type="text" className='form-control' id='name' placeholder='Enter Fullname as per Aadhar' onChange={(e)=>{setName(e.target.value)}} />
                                </div>
                            </div>
                        </form>
                        <div className='QRcode'>
                            <div className='QRcode1'>
                                <li>Be cautious about sharing personal and financial information online. Never share sensitive information like passwords, PINs, or CVV numbers over email, social media, or other unsecured channels. Additionally, consider using strong, unique passwords for your online accounts to prevent unauthorized access.</li>
                                <li>Regularly review your bank and credit card statements for any unauthorized transactions. Report any suspicious or fraudulent activity to your bank or card issuer immediately. Set up transaction alerts or notifications to stay informed about account activity in real-time.</li>
                            </div>
                            <div className='QRcode2'>
                                <QRCode value='https://bmspayment.vercel.app/' style={{width:"150px",height:"150px"}} />
                            </div>
                        </div>
                        <div className='QRcodeScroller'>
                            <div className='QRcodeScroller1'>
                                <span>Please scan this QRCode for Payment</span>
                                <span>Please scan this QRCode for Payment</span>
                                <span>Please scan this QRCode for Payment</span>
                            </div>                               
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
       
    </div>
  )
}

export default QRvalidation