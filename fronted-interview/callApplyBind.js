let personalDetail={
    fname:"Preeti",
    lname:"Sharma",
    // Arrow function does't work here because this can be accessed in global scope. 
    printFullName: function (){
        console.log(this.fname+" "+this.lname);
    }
}

// personalDetail.printFullName();

let personalDetail1={
    fname:"Shivani",
    lname:"Sharma"
}

// we will now borrow the printFullName function from personalDetail object;
personalDetail.printFullName.call(personalDetail1);

// Alternative and good way of this function woul be making a printFullName function separetly and then borrwing it.

let printFullAddress= function (fname,lname){
    console.log(fname,lname, "from",this.state+" "+this.city);
}

let add={
    state:"Jharkhand",
    city:"Ranchi"
}

printFullAddress.call(add,"Manoj","Kumar");
printFullAddress.apply(add,["Preeti", "Sharma"])

let add1={
    state:"Haryana",
    city:"Gurugram"
}

printFullAddress.call(add1,"Ayush","Kumar");

//bind Method-> It first makes the copy of the function and then binds it 

let printMyData= printFullAddress.bind(add,"Puja","Kumari"); //Here printFullAddress has been as it is copied in printMyData funtion and then we can simply invoke the function

printMyData();// this is just used to keep a copy of this method and it can be invoked later.


