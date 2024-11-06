import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BeatLoader} from 'react-spinners';

function SeateBooking(props) {
    const dispatc=useDispatch();

    const [loader,setLoader]=useState(false);

    const SelectedTheaterData=useSelector(state=>{return state.SelectedTheaterData});
    
    const redirect=useNavigate();
    
    const [b,setB]=useState([[],[]]);
    const [totalcost,setTotalcost]=useState(0);
    const [pay,setPay]=useState(false);
    const PayStyle={display:pay?"block":"none"};
    const onclickHanlder=(val,rowIndx,colIndex)=>{
        if(val==0){
            if((b[0].length+b[1].length)<props.count){
                const y=[[],[]];
                for(let i=colIndex;i<(colIndex+props.count);i++){
                    y[0].push(`${rowIndx}-${i}`);
                }
                setB(y);

                setTotalcost(props.count*300);
                
                setPay(true);
            }
            else{
                b[0].shift();
                setB([[...b[0],`${rowIndx}-${colIndex}`],[]]); 
            }
        }
        else{
            if((b[0].length+b[1].length)<props.count){
                const y=[[],[]];
                for(let i=colIndex;i<(colIndex+props.count);i++){
                    y[1].push(`${rowIndx}-${i}`);
                }
                setB(y);

                setTotalcost(props.count*245);
                
                setPay(true);
            }
            else{
                b[1].shift();
                setB([[],[...b[1],`${rowIndx}-${colIndex}`]]);
            }
        }
        
        
    }

    const [diasble,setDisable]=useState(false)
    const getStyle=(val,rowIndx,colIndex)=>{
        if(Array.isArray(b[val]) && b[val] && b[val].includes(`${rowIndx}-${colIndex}`)){
            if(diasble){
                return {PointerEvents:"none",backgroundColor:"lightgray",border:"none",color:"lightgray"}
            }
            else{
                return {backgroundColor:"rgb(10, 165, 10)",color:"#fff"}
            }
        }
        else{
            return {backgroundColor:"#fff",color:"rgb(10, 165, 10)"}
        }
    }

    const BestsellerStyle=(val,rowIndx,colIndex)=>{
        if(Array.isArray(b[val]) && b[val] && b[val].includes(`${rowIndx}-${colIndex}`)){
            return {backgroundColor:"gold",color:"#fff"}
        }
        else{
            return {backgroundColor:"#fff",color:"gold"}
        }
    }
    
    return(
        <div>
            <div className='container-fluid' style={{paddingTop:"100px"}}>
                <div className='row'>
                    <div className='col-md-12' style={{display:"flex",justifyContent:"center"}}>
                        <div>
                        <div className='semirecline' >
                            <div className='top'>
                                SEMI RECLINER-Rs. 300.00
                            </div>
                            <div style={{borderTop:"1px solid rgba(211, 211, 211, 0.493)",padding:"10px"}}>
                            {
                                SelectedTheaterData.Recliner.map((row,rowIndx)=>{
                                    return(
                                        <div>
                                            <div className='row1'>
                                                <div className='alphabets'>{SelectedTheaterData.Alphabets[0][rowIndx]}</div>
                                                {
                                                    row.map((col,colIndex)=>{
                                                        if(col!=""){
                                                            if(Array.isArray(SelectedTheaterData.BestSeller) && SelectedTheaterData.BestSeller[0][rowIndx] && SelectedTheaterData.BestSeller[0][rowIndx].includes(col)){
                                                                return <div className='col2' style={BestsellerStyle(0,rowIndx,colIndex)} onClick={()=>{onclickHanlder(0,rowIndx,colIndex)}} key={colIndex}><span style={BestsellerStyle(0,rowIndx,colIndex)}>{col}</span></div>
                                                            }
                                                            else{
                                                                return <div className='col1' style={getStyle(0,rowIndx,colIndex)} onClick={()=>{onclickHanlder(0,rowIndx,colIndex)}} key={colIndex}>{col}</div>
                                                            }
                                                        }
                                                        else{
                                                            return <div className='colspace'></div>
                                                        } 
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className='top'>SILVER CLASS-Rs. 245.00</div>
                        <div style={{borderTop:"1px solid rgba(211, 211, 211, 0.493)",padding:"10px"}}>
                        {
                            SelectedTheaterData.Gold.map((row,rowIndx)=>{
                                return( 
                                    <div> 
                                        <div key={rowIndx} className='row1'>
                                                <div className='alphabets'>{SelectedTheaterData.Alphabets[1][rowIndx]}</div>
                                            {  
                                                row.map((col,colIndex)=>{
                                                    
                                                    if(col!=""){
                                                        if(Array.isArray(SelectedTheaterData.BestSeller) && SelectedTheaterData.BestSeller[1][rowIndx] && SelectedTheaterData.BestSeller[1][rowIndx].includes(col)){
                                                            return <div className='col2' style={BestsellerStyle(1,rowIndx,colIndex)} onClick={()=>{onclickHanlder(1,rowIndx,colIndex)}} key={colIndex}><span style={BestsellerStyle(1,rowIndx,colIndex)}>{col}</span></div>
                                                        }
                                                        else{
                                                            return <div className='col1' style={getStyle(1,rowIndx,colIndex)} onClick={()=>{onclickHanlder(1,rowIndx,colIndex)}} key={colIndex}>{col}</div>
                                                        }
                                                    }
                                                    else{
                                                        return <div className='colspace'></div>
                                                    }
                                                    }
                                                    )
                                            }    
                                        </div>
                                    </div>
                                )})
                        }
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-6'>
                                <div className='outscreen'><div className='inscreen'></div></div>
                                <div className='outerscreen'></div>
                                <div className='eyes'>All eyes this way please!</div>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row' id='payment' style={PayStyle} onClick={()=>{setDisable(true)}}>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        {
                            loader?<BeatLoader
                            color={'#fff'}
                            loading={loader}
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className='beatLoder'
                          />:
                        <div className='payment' onClick={()=>{dispatc({type:"SelectedTickets",payload:b});dispatc({type:'TotalAmount',payload:totalcost});setLoader(true);setInterval(()=>{setLoader(false);redirect('/QRvalidation')},7000);}}>Pay Rs.{totalcost.toFixed(2)}</div>
                        }
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>

        </div>
    )
}

export default SeateBooking