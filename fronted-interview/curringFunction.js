// Curring function--> It is basically a technique in javaScript , that transform the function of multiple argument into several function of a single argument.

// Function curring using bind method

let multiply= function (x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(8);
let multiplyByThree=multiply.bind(this,3,5); //x=3 and y=5 
multiplyByThree(6); // third arg is being ignored

//Funtion curring using closures

let Multiply= function (x){
 return function (y){
     console.log(x*y);
  }
}

let MultByTwo= Multiply(2);
MultByTwo(4)