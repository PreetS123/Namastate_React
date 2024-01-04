// Polyfill is a fallback for old browser
//Sometimes it happens that the old browser doesn't support some methods then we create those method to support the browser. This is known as polyfill.

let name={
    fname:"Preeti",
    lname:"Sharma"
}
let printName=function (city,state){
    console.log(this.fname+" "+this.lname,city,state);
}

let printMyName= printName.bind(name);
printMyName("ranchi","jharkhand");

//Function prototype--> If we keep any method under Function.prototype then each functions and methods have access to it.

 Function.prototype.myBind= function(...arg){
    let obj=this;
    let params= arg.slice(1);
    return function (...arg1){
       obj.apply(arg[0],[...params,...arg1]);
    }
 }

 let printMyName1=printMyName.myBind(name);
 printMyName1("Ranchi","Jharkhand");