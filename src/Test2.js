const Satthi=()=>{
    return new Promise((a,b)=>{
        const data=Math.random() >0.5? "Hello":null;
        if(data){
            a(data)
        }
        else{
            b("Erroe occured");
        }
    })
}
Satthi().then((res)=>(console.log(res))).catch((err)=>{console.log(err)})