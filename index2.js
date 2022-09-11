//console.log("Hello Word");
//txt="<h2>Hello</h2>tommorow<br>today<br>";
//document.getElementById("try").innerHTML=txt;


//Note:
//whenever we declare new keyword an new object is created 
//therefore by saying new Number() the typeof of the object is object not number.


//obj.toString and String(obj) have the same implementation 
//But when using with Array there is a ceratin difference with JSON.stringify();

/* let arr=[1,2,3];
1.console.log(String(arr));
2.console.log(JSON.stringify(arr));

the difference between 1 and 2 is that in the case of 1 the original array is lost and cant be restored as array but implemetned as string
while parsing it to JSON format but in 2 the Array type can be restored and henced be parsed to JSON in form srting of an array 
1.  1,2,3  //braces are lost hence cant be restored 
2.  [1,2,3]
*/
//Stringify Functions of an object
// const person = {
//     name: "John",
//     age:function(){return 30;}
//   };
//   person.age = person.age.toString();
//   let myString = JSON.stringify(person);
//   console.log(myString);
  
//**while using sringify on objects it converts both key:value pairs to strings
//output
//{"name":"John","age":"age(){return 30;}"}


//Object.values(object_name),Object.keys(object_name) 
//gives an array of values and keys ;
//Always while passing data values to a HTML we have to return in JSON format
//stringfy is used to convert the whole object to string


//****First way of declaring objects using function()
// function Person(first,last){
//   this.firstname=first;
//   this.lastname=last

// }
// let obj=new Person("Adithya","Srivastava");
// obj.name=function(){
//   return this.firstname+" "+this.lastname;
// }
// obj.age=18;
// console.log(obj.name());
// console.log(obj.age);


// ****Second way of declaring objects using class
// class Person{
//   constructor(first,last){
//     this.firstname=first;
//     this.lastname=last;
//   }

// }
// var obj1=new Person("Adithya","Srivastava");
// obj1.age=18; 
// obj1.name=function(){
//     return this.firstname+" "+this.lastname;
//   }
//   console.log(obj1.name());
//   console.log(obj1.firstname);
//   console.log(obj1.last);
//   console.log(obj1.age);
  
//while adding a new attribute or method to an object no need 
//of var or let or const just declare it
//EX:
//obj.propertyname="variable_name";
//obj.methodname=function(arguments){};

//Object prototype
//we can add methods or attributes to objects created but to add it to the constructor(Classname) we use prototype
// Person.prototype.check="Hi";
// Person.prototype.mycheck=function(){
//   return this.check;
// }
// console.log(obj1.check);
// console.log(obj1.mycheck());

// Function call 
// method of one object can be invoked to other objects using the object as base class and invoking call method()


// var person_base = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// let person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// let person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// console.log(person_base.fullName.call(person1));
// console.log(person_base.fullName.call(person2));

//here person_base is the base object and call is being invoked 
//General syntax baseobj.methodname.call(sourceobj);


//call() with argumenrts 
// var person_base = {
//   fullName: function(city) {
//     return this.firstName + " " + this.lastName+" "+city;
//   }
// }
// console.log(person_base.fullName.call(person1,"Oslo"));
// //necessary to pass a source object to invoke the call()
// //even if you pass the arg but no object it treats the elements as undefined
// //for ex:console.log(person_base.fullName.call("Mumbai"));//here all of them are undefined eventhough we pass the city name 


// //Inheritance

// class Animal{
//   constructor(name){
//     //console.log("Animal created");
// this.name=name;
//   }
//   walk(){
//     console.log("Animal can walk");
//   }
// }
//extends indicate inheritance
// class Dog extends Animal{
// constructor(name,breed_name){//the attributes in the base class need to be passed in the derived class constructor as argument 
//   //like name is part of base or super class and being passed in the derived constructor
//   super(name);//forms the base constructor necessary to invoke to achieve inheritance 
//   //console.log("Dog created");
//   this.breed=breed_name
// }
// bark(){
//   console.log("Woof");
// }
// }

// let d1=new Dog("tom","lab");
// console.log(d1.name);
// console.log(d1.breed);

// console.log(d1.bark());
// console.log(d1.walk());


//****To convert a string to a function.
// const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
// const obj89 = JSON.parse(text);
// console.log(eval("("+obj89.age+")"));//very imp using eval("("+obj.name+")") we can convert a string to function.
//therefore to convert a string to function use eval()

//Async JavaScript 
//In a nutshell it is:- Start now and finish it later.
//JS is mostly a synchronous lang or single threaded lang where statements are executed one single time

// console.log(1);
// console.log(2);

// setTimeout(function(){console.log("After three secs")},3000);
// //setTimeout function takes in a function an argument and time it takes to delay the function call
// //therefore the following function will be executed after three secs when all other statements are done 
// console.log(3);
// console.log(4);
//output:
// 1
// 2
// 3
// 4
// After three secs
//here the statements within the thread are not disturbed by setTimeout
//all the console.log() staments are executed and then there is a callback after 3 secs to execute the function
//This is how Async JS works.

// const request=new XMLHttpRequest();//creates an object to send request to the servers 
// //request obj will have att the status and state and the responseText that can be checked in the networks tab


// //console.log(request);
// request.addEventListener("readystatechange",function(){//the eventlistener invokes the function when the state changes
//   if(request.readyState===4 && request.status===200){
//     console.log(request,request.responseText);
//   }
//   //state represents whether the request made the link or not
  
//   else if(request.readyState===4){
//     console.log("Could not fetch the data");

//   }
// });

// request.open("GET","https://jsonplaceholder.typicode.com/todos/1");//the second parameter is a  API endpoint or basically the link which we would like
// //to access from a different server.Creates a link with the end point. First parameter is the typ of request.
// request.send();//sends the link.


//request.readyState
// 0   UNSENT  open() has not been called yet.
// 1   OPENED  send() has been called.
// 2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
// 3   LOADING Downloading; responseText holds partial data.
// 4   DONE    The operation is complete.

//request.status is also an key in the request obj and it signifies whther it got any info or not
//request.status===200 meaning found and 404 not found and 502 bad server error
//=== equate both the type and the value of the variable.


//***Async part***


// const getTodo=function(callback){ //to make getTodo as a constant function we assign like a function name to the function
// const request=new XMLHttpRequest();
// request.open("GET","https://jsonplaceholder.typicode.com/todos/1")
// request.send();
// //console.log(request);
// request.addEventListener("readystatechange",function(){
// if(request.readyState===4 && request.status===200){
//   callback(undefined,request.responseText);

// }
// else if(request.readyState===4){
//   callback("Not found",undefined);

// }
// })};

// console.log(1);
// console.log(2);
// getTodo(function (err,data){ //here the function callback is being defined equivalent to callback=function(){}
//   console.log("callback fired")
//   if(err===undefined){
//     console.log(data);
   
//   }
// else if(data===undefined){
//   console.log(err);
// }
// });

// console.log(3);
// console.log(4);
//output
//1
//2
//3
//4
//JSON file 
//as in 243 line the getTodo is being called it is interacting with another API and browser pathway
//here first all the statements are executed then the JSON file is returned to the console.
//Example of Asynchronous JS
//here first fetching of data will take place while that is going on the other 
//statements are executed then the callback fuction brings the data into the same single thread.


//JSON is an array of objects which in a single string.
//every value in JSON the string values and keys must be in double qoutes 
//but in case of bool and numbers no need of double qoutes
//JSON is used to communicate with servers with the client 
//Data is always passed from one server to another using strings.
//But JSON holds systematic data compared to just plain text that's very efficient.

//callback hell(nested callback) fetch one API then after fetching that fetch the next API
// const getTodo=function(resource,callback){ //to make getTodo as a constant function we assign like a function name to the function
//   const request=new XMLHttpRequest();
//   request.open("GET",resource);
//   request.send();
//   request.addEventListener("readystatechange",function(){
//   if(request.readyState===4 && request.status===200){
//     const data_received=JSON.parse(request.responseText);
//     callback(undefined,data_received);
  
//   }
//   else if(request.readyState===4){
//     callback("Not found",undefined);
  
//   }
//   })};

// //callback hell
//   getTodo("list/first.json",function (err,data){ //here the function callback is being defined equivalent to callback=function(){}
//     console.log("callback fired")
//     if(err===undefined){
//       console.log(data);
//       getTodo("list/second.json",function (err,data){ //here the function callback is being defined equivalent to callback=function(){}
//         console.log("callback fired")
//         if(err===undefined){
//           console.log(data);
//           getTodo("list/third.json",function (err,data){ //here the function callback is being defined equivalent to callback=function(){}
//             console.log("callback fired")
//             if(err===undefined){
//               console.log(data);
              
//             }
//           else if(data===undefined){
//             console.log(err);
//           }
//           });
//         }
//       else if(data===undefined){
//         console.log(err);
//       }
//       });
//     }
//   else if(data===undefined){
//     console.log(err);
//   }
//   });
  //here whenever data fetching is successful in the first case then second fetching is initiated this 
  //leads to callback hell
  //to solve we use promises.

  //promise example.
  //A promise is something that can invoked later on
  //either it can be resolved when we get the data or be rejected when we encounter an error
  //first thing to use a promise is to return a promise in the function that is used 
  //inside the promise we need pass a function with parameters resolve or reject
  //both resolve and reject are in build JS functions.
  //this function is used for network request 

//   const getlist=function(resource){
//     return new Promise(function(resolve,reject){
//       const request=new XMLHttpRequest();
//       request.open("GET",resource);
//       request.send();
// console.log(request);
//       request.addEventListener("readystatechange",function(){
// if(request.readyState===4 && request.status===200){
//   const data=JSON.parse(request.responseText);
//   resolve(data)
// }
// else if(request.readyState===4){
//   reject("not found");

// }
//       });

//     }); 
//     };
// getlist("list/first.json").then(function(data_received){
// console.log("Found 1",data_received);
// return getlist("list/second.json");
// }).then(function(data_received){
//   console.log("Found 2",data_received);
//   return getlist("list/third.json")
// }).then(function(data_received){
//   console.log("Found 3",data_received);
// }).catch(function(err){
// console.log(err);
// });

//when getlist is invoked a promise object is returned which either calls reolve or reject function
//which in turn return something(maybe an obj) which calls the then or catch method.
//.then method is a method of a promise
//when we call the function getlist it returns a promise(an activity that can be done later on)
//the promise basically ensures that the function passed within the .then method() will be fired 
//only when the promise has been resolved or else it will go to catch when the promise has been rejected.

//fetch api

//fetch api returns a promise which can be resolved or rejected based on data
//the data is the response obj just like XMLHttprequest request obj but the data fields aren't exactly same in both the obj
//fetch method easier and cleaner code
// fetch("list/first.json").then(function(response){
// if(response.status===200){
//   console.log(response);//this response is not likee the request XML kinda data
//                         //each method invoked in the response will return a promise.
// return response.json();//parse and returns the promise obj 
// // //equivalent code for this is
// // /*
// // const prom=new Promise((resolve,reject)=>{
// // const data=JSON.parse(data)
// // resolve(data);}
// // );
// //  */
// }
// else{
//   return new Promise(function(resolve,reject){
//     reject("not found");
//   })
// }
// }).then(function(data){
//   console.log(data);
//   return fetch("list/second.json");
// }).then(function(response){
//   console.log(response);
// }).catch(function(err){
//   console.log("rejected",err);
// });

//keep returning new promise to access data or fetch API endpoints

//async and await
//list of api endpoints.
var arr_list=["list/first.json","list/second.json","list/third.json"];


const getMylist=async function(){
  let arr_data=[];   //all the variables that are gonna take part in aync action shoud be
  //within the function or there will be a callback and the action will be executed twice like in 
  //this case the arr_data must be inside of the function or there would be copies and the array will have length 6 instead of 3
  
  var arr_index=[];
  let length=arr_list.length;
  
for(let i=0;i<length;i++){
const response=await fetch(arr_list[i]);//here the JS waits till the promise is resolved and the 
//value is stored to response variable.


if(response.status===200){
  //console.log(response.json());
  const data=await response.json();//similarly JS also halts till the 
  //the promise is resolved and json parsing has been done of the JSON file.
  //after being resolved it is no more a promise but now an array.
  //console.log(data);//but data after being resolved is an array 
  arr_data.push(data);
  //console.log(data);
 
  
}
else{
  arr_index.push(i);
}
}
//console.log(arr_data);
if(arr_index.length===0){
return arr_data;}
else{
  let str="";
  arr_index.forEach(function(i){
str+=String(i);
str+=" ";
  });
  throw(Error("Could not find the endpoint at indexes "+str))
}
};

console.log(1);
console.log(2);
console.log(getMylist());
getMylist().then(function(a){
  console.log(a);
let new_length=a.length;
for(let k=0;k<new_length;k++){
console.log(a[k]);

}
}).catch(function(err,a){
  console.log(err);
  console.log(a);
});
console.log(3);
console.log(4);
//console API not part of the async JS henx=ce if we place line 455 at
//line 469 it will execute first console.log statments and then the 
//async part.
//console.log(arr_data);

//the async function always returns a promise
//the await keyword stalls the progress and the process is being executing in another part of the browser path
//await helps in resolving the promise objects 
//cleaner syntax rather than repeated .then() methods

//POST implementation
// const postimplement=async function(url="",data={}){
//   const response=await fetch(url,{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(data)
//   }
//     );
//     return response.json();

// }

// postimplement("/index2.html",{try:90}).then((data_sent)=>{
// console.log(data_sent);
// })

