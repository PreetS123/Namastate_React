/**
 * Inheritance--> Inheritance is just accessing properties of sme other object.
 * 
 * Prototype--> Whenever we create any function, object or an array, javaScript engines adds some hidden properties to our method. These hidden properties are in object form
 * arr.__proto__ is same as arr.prototype
 * arr.__proto__.__proto__ is same as Object.prototype and 
 * 
 */

let arr=["Preeti","Priya"];

let object={
    name:"Preeti",
    city:"Ranchi"
}

let object2={
    name:"Priya"
}

object2.__proto__= object;