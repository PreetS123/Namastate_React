
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

///Theory for debouncing 
/**
 * Debounce is a technique used in javaScript for optimization of code i.e It is a practice used to delay the timing of a function. 
 * In orther way it is adding a restriction on calling of a function.
 * 
 * Debouncing in javaScript is a practice used to improve browser performance. Some of the functionality in a web browser that require time-consuming computation, if those methods is invoked frequently, it might affect the performance of the browser,so debouncing comes into the picture. If we delay them for few seconds and then call those functions then it will reduce network traffic on website and hence increase the performance of the website.
 */