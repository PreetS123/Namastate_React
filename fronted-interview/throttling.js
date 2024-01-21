
const expensive=(args)=>{
    console.log("Expensive function");
}

const throttlebtn= document.getElementById("throttlebtn")
window.addEventListener("resize",betterExpensive)

function betterExpensive(){
    throttle(expensive,100)
}


const throttle= (func,limit)=>{
    let flag=true;
    return function (){
        let context= this;
       let args= arguments;
        if(flag){
            func.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}