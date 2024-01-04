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


