let personalDetail={
    fname:"Preeti",
    lname:"Sharma",
    // Arrow function does't work here because this can be accessed in global scope. 
    printFullName: function (){
        console.log(this.fname+" "+this.lname);
    }
}

personalDetail.printFullName();

let personalDetail1={
    fname:"Shivani",
    lname:"Sharma"
}

// we will now borrow the printFullName function from personalDetail object;
personalDetail.printFullName.call(personalDetail1);

// Alternative and good way of this function woul be making a printFullName function separetly and then borrwing it.

let printFullAddress= function (){
    console.log(this.state+" "+this.city);
}

let add={
    state:"Jharkhand",
    city:"Ranchi"
}

printFullAddress.call(add);

let add1={
    state:"Haryana",
    city:"Gurugram"
}

printFullAddress.call(add1);
