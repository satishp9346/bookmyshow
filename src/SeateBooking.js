import React, { useState } from 'react'

function SeateBooking(props) {
    const arr=[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
               ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
               ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
               ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,"","",13,14,15],
               ["","","","","","","","","","","","","","","","","","","","","",""],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20],
               [1,2,3,4,"",5,6,7,8,9,10,11,12,13,14,15,16,"",17,18,19,20]    
            ]
    
    const bestseller=[[6,7,15],[2,11,17],[8,14,15,16],[2,3,8,16],[13],[6,13,15],[13,15],[3,4,13,15],[0],[3,17,20],[2,4,5,6,7,8,17,18,19,20],[1,2,5,6,7,8,12,13,14,15,16,17,18,20],[5,6,9,10,11,12,13,14,19],[10,11],[0],[0],[1,8,17,19],[1,2,3,4,5,6,7,9,10,14,17,18,20]]
    
    const alphabets=['A','B','C','D','E','F','G','H',' ','I','J','K','L','M','N','O','P','Q'];
    const [b,setB]=useState([]);
    const [totalcost,setTotalcost]=useState(0);
    const [pay,setPay]=useState(false);
    const PayStyle={display:pay?"block":"none"};
    const onclickHanlder=(rowIndx,colIndex)=>{
        if(b.length<props.count){
            const y=[];
            for(let i=colIndex;i<(colIndex+props.count);i++){
                y.push(`${rowIndx}-${i}`);
            }
            setB(y);
            setTotalcost(props.count*295);
            setPay(true);
        }
        else{
            b.shift();
            setB([...b,`${rowIndx}-${colIndex}`]);
        }
    }
    const [diasble,setDisable]=useState(false)
    const getStyle=(rowIndx,colIndex)=>{
        if(Array.isArray(b) && b && b.includes(`${rowIndx}-${colIndex}`)){
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

    const BestsellerStyle=(rowIndx,colIndex)=>{
        if(Array.isArray(b) && b && b.includes(`${rowIndx}-${colIndex}`)){
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
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='top'>SILVER CLASS-Rs. 295.00</div>
                        <div style={{borderTop:"1px solid rgba(211, 211, 211, 0.493)",padding:"10px"}}>
                        {
                            arr.map((row,rowIndx)=>{
                                return <div key={rowIndx} className='row1'>
                                        <div className='alphabets'>{alphabets[rowIndx]}</div>
                                    {  
                                        row.map((col,colIndex)=>{
                                            
                                            if(col!=""){
                                                if(Array.isArray(bestseller) && bestseller[rowIndx] && bestseller[rowIndx].includes(col)){
                                                    return <div className='col2' style={BestsellerStyle(rowIndx,colIndex)} onClick={()=>{onclickHanlder(rowIndx,colIndex)}} key={colIndex}><span style={BestsellerStyle(rowIndx,colIndex)}>{col}</span></div>
                                                }
                                                else{
                                                    return <div className='col1' style={getStyle(rowIndx,colIndex)} onClick={()=>{onclickHanlder(rowIndx,colIndex)}} key={colIndex}>{col}</div>
                                                }
                                            }
                                            else{
                                                return <div className='colspace'></div>
                                            }
                                            }
                                            )
                                    }    
                                </div>
                            })
                        }
                        </div>
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
                        <div className='payment'>Pay Rs.{totalcost.toFixed(2)}</div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>

        </div>
    )
}

export default SeateBooking