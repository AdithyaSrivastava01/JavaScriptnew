console.log("Hello World");

//higher order function:function which take in a function as an arg or can even return a function(not the call)
//follow the DRY(don't repeat yourself) principle
//given the array of radius of circle we need to calculate the area,circumference and diameter
//best approach is function reusability

// const radius=[1,2,3,4];
// function area(radius){
//     return (Math.PI*radius*radius);

// }
// function circumference(radius){
//     return (2*Math.PI*radius);

// }
// function diameter(radius){
//     return (2*radius);

// }

// function calculate(arr,logic){
//     const output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(logic(arr[i]));

//     }
//     return output;
// }
//console.log(radius.map(area));//work just like calculate where each element in the radius is passed 
//as an argument in the area function
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// const output=[];
// radius.forEach(function double(i){//forEach never returns a value
//     output.push(2*i);
//     });
// console.log(radius);
// //output.push(k);
// console.log(output);

//dynamic import of a file
//import print from "./module.js"
//here document is the global window 
  document.addEventListener( "click", async function check(){
        const response=await import("./module.js");//return a promise in form of module 
        //const {default:print,print1:print1}=await import("./module.js");//return a promise in form of module.the Module obj 
        //contains default and the function name then function name as key value pairs


        console.log(response);
        
        
        
        //output: module object
        //Module {Symbol(Symbol.toStringTag): 'Module'}
        // default: ƒ print()
        //  print1: ƒ print1()  
        //we can access it using key value pair 
        const {default:print,print1:print1}=await import("./module.js");//return a promise in form of module.the Module obj 
        //contains default and the function name then function name as key value pairs
//then we invoke each function by calling it 
       
         print1();
        // print();
        console.log("Mine");
    });
    
//print();
check();

// to import the import the module we need to declare type="module" in script tag of the html
//the function in to be imported module must start with export default 
//the file path in the import statement must be relative"./filename"
//dynamic import of module helps to invoke the function or classes from the module 
//dynamically
//therefore in the above function only when I click in the document the function is invoked

//import function is reqired to achieve dynamic import
//within the if statement the import x from y statement doesnt work
//hence we have to use import() to create module obj and access the function using key value pairs

