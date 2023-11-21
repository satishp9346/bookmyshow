import React from 'react'

function Test1() {
    const arr=[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               ["","","","","","","","","","","","","","","","","","","","","",""],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18],
               [1,2,3,"","",4,5,6,7,8,9,10,11,12,13,14,15,"","",16,17,18]    
            ]
    const alphabets=['A','B','C','D','E','F','G','H',' ','I','J','K','L','M','N','O','P','Q'];
    const onclickHanlder=(value)=>{
        console.log(value);
    }
    return(
        <div>
            <div className='top'>SILVER CLASS-Rs. 295.00</div>
            {
                arr.map((item,indx)=>{
                    return <div key={indx} className='row'>
                            <div className='alphabets'>{alphabets[indx]}</div>
                        {  
                            item.map((value,index)=>{
                                if(value!=""){
                                    return <div className='col' onClick={(index)=>{onclickHanlder(value)}} key={index}>{value}</div>
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
            <div className='outscreen'><div className='inscreen'></div></div>
            <div className='outerscreen'></div>
        </div>
    )
}

export default Test1