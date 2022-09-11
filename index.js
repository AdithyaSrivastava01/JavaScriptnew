 //1.Ways to print in JS
    //prompt("Hello World");
    //alert("hi");
    //document.write("check");
    //console.log("In browser");
    
    
    //2.Console API
    //console.log("In browser");
    //console.warn("Warning");
    //console.error("This is an erorr");
    //console.clear(); clears the console
    //console.log() has multiple arguments 
    //console.log("hi",6+9,"mine");
//3.Variables
//let a="Adithya";
//let c=9;
//JS objects works like cpp objects only without classes.Directly the atrribute and methods are declared.
/*let marks={ //key values of an object can be strings or variable name.
    adi:90,//u can treat adi as a variable name 
    harshita:80,
    display(){
        return this.adi+this.harshita; //this keyword is used to access the current objects variables
    }
};
console.log(marks.display());//method function in an object need not require a "function" keyword
//a variable with no value is pritted as undefined.
//array of JS just work similar to lists in pyhton 
let arr=[1,2,3,"hi",8,9];
console.log(arr);

//4.Functions
//like in python we writ def here it is function as keyword
 function sum(a,b){
    return a+b;
}
console.log(sum(7,9));

//5.Loops
let arr1=[1,2,3,4,5];
arr1.forEach(function(element){
    console.log(2*element);
});//another way to iterate through an array using function.Argument of forEach is a function which is defined outside or in argument
console.log(arr1.length);

//the difference between forin and forof is that for in will give you the index or the keys of the obj whereas
for of will give you the value of the obj or the values present at those keys.

//6.Array methods
//new operator
let car=new Array("BMW","Merc","Audi");
console.log(car);
//the new operator creates a new array of the following elements.
//arrays are mutable 
//arr.length returns the len of the array
//const x=new Array(40,100,1);
//console.log(x);
//peculiar behaviour of new
//new Array(40) doesnt mean [40] but it implies it has 40 elements undefined
//therefore while using new always place more than one arg
//typeof in JS returns array as object as arrays are numbered indexed arrays.
//therefore use Array.isArray
console.log(Array.isArray(x));
//convert array elements to strings
console.log(x.join(" "));//join("t") here t can be space or asterisks etc. whatever we need to separate the elements of the array with.
console.log(x.toString());//converts to string with separator as space
//reduce and increase
car.pop();//removes the last element
console.log(car);
car.push("Audi");//adds the elemnt to the last
console.log(car);
car.shift();//removes the first element
console.log(car);
car.unshift("BMW");//adds the element to the 0th position
console.log(car);
//deleting 
//delete x[2];//it changes the last element in x to undefined.So the length is still three.
//kinda avoid it if you want permanent delete of both element and length.
console.log(x);
//splice method
let fruits=["banana","apple","orange","mango"];
fruits.splice(2,0,"lemon","kiwi");//the first parameter gives from where the element  must be added
//the second parameter is number of elements to be removed from the the first index[zeroth index]
//the removal of the element takes place first place at the specified index then the addition of the elements takes place
//when 0 elements are removed then the addition takes place before the nth index mentioned
//THE OUTPUT:["banana","apple","lemon","kiwi","orange","mango"] here the elements are added before the 2nd index orange and not after
//the third arg it is the elements to added and no. of them can be endless.
console.log(fruits);
fruits.splice(0,3);//0 added and three removed from index 0.
console.log(fruits);
//concatenate two arrays 
//dont use + it wont work perfectly
let y=["op","bro"];
let new_arr=y.concat(x,car,fruits);
console.log(new_arr);
let new_arr1=y.concat(x,car,fruits,"Adithya");//takes strings to as an argument 
console.log(new_arr1)
//arr.concat() will take in endless number of arguments of arrays or strings too and the first elements of the elemnt will be 
//the array it is operating on. 


//slicing
//the slice method creates n new array keeping the original undisturbed
console.log(fruits.slice(2));//gives all the elements from index 2 to infinity python equivalent l[2:]
console.log(fruits.slice(1,3));//gives all elements from 1 to 2 python equivalent l[1:3]

//sorting
//All sorting takes place in strings 
//sorting one must use comparator function or loop
let z=[4,5,6,2,13];
console.log(z.sort(function(a,b){
    return a-b;//for descending return b-a
}));
//the comparator function is very imp function.



//Strings
/*let a="A d i t h y a";//here the string has spaces as the separators
let l=a.split(" ");//gives the array of characters with no space characters involved as element
console.log(l);*/

//Strings Padding
/*let s="5";
console.log(s.padStart(4,0));//places 3 zeroes in infront length in always 4 but the no.of zeroes is before the text
console.log(s.padEnd(4,0));//places 3 zeroes in atback*/





//objects 
//To create a new key:value pair
/*let obj={"Key1":"Pair1","Key2":"Pair2"};
console.log(obj);
obj["key3"]="pair3";
console.log(obj);*/


//Events
//Anything happening in the browser is an event like the page is done loading 
//when the user clicks anything
/*Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page*/

//Dates 

//t=new Date();
/*new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)*/
/*console.log(t);
var t = new Date();
console.log(t.getDay());
console.log(t.getDate());
var dd = String(t.getDate()).padStart(2, '0');
var mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = t.getFullYear();

let k = mm + '/' + dd + '/' + yyyy;
console.log(k); */

//Converting JSON to JavaScript objects

/*let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj=JSON.parse(text);//JSON.parse(src) is parsing into JS objects
console.log(obj);


//let vs var
// var is a function scope ***
if(true){
    var varVariable = 'This is var';
     var varVariable = 'This is var again';
}

console.log(varVariable); // This is var again

// let is a block scope ***
if(true){
    let letVariable = 'This is let';
    letVariable = 'This is let again';//reassignment

    // let variable can't re-define but we can re-assign value


    console.log(letVariable); // let letVariable = 'This is let again';^SyntaxError: Identifier 'letVariable' has already been declared
}
*/
//console.log(letVariable);
//* In JS the variables can be declared without being initialized. 
//It never throws an error of i=unidentified variable.
//for Ex:
//var x=90;
//document.write(x+y);Never throws an error of an unidentified variable y it just assigns the value of y to undefined.
//var y=7;//but only valid for var declaration not for let and const method of declaration.

//typeof operator
//there are no int or floats all are under "number" and NaN is too a number
//Arrays are considered as objects so is it true with Date object.

/* JS classes
class name{
    constructor(variable1,variable2){
        this.varialble1=variable1;
        this.variable2=variable;
    }
    **methods
    method1{.....}
    method2{...}

};
//to call a constructor 
let variable=new class_name(attributes);
*/


//Note:
//whenever we declare new keyword an new object is created 
//therefore by saying new Number() the typeof of the object is object not number.