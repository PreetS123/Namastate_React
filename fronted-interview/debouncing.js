
let counter=0;
function getData(){
   console.log("fetching data",counter++);
}

const debounceMethod= function(fn,d){
    let timer;
    return function (){
        let context= this;
        let arg=arguments;
        clearTimeout(timer)
         timer=setTimeout(()=>{
            fn.apply(context,arguments)
         },d);
    }
}

const betterFunction= debounceMethod(getData,300)