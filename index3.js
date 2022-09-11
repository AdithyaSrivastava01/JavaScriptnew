//DOMContentLoaded

//when we place the script tag in the head tag the DOM takes time to load but HTML elements are already
//loaded and this the reason why the fuctionalities don't work


//hence while keeping the script tag in the header we add DOMContentLoaded in the event listener to achieve the regular functionality
//the eventlistener goes to the document object not to any particular HTML obj
document.addEventListener("DOMContentLoaded",function(){




console.log("Hello world");
// let book_list=document.getElementById("book-list");
// the name of the the class and the id must be in double quotes.

// console.log(book_list); //the browser returns a HTML object which can be accessed
let titles=document.getElementsByClassName("title");
console.log(titles);//returns a HTML collection which not an Array
//cant perform oerations of an Array in the HTML collection
for(let i=0;i<titles.length;i++){
    console.log(titles[i]);
}//properties like .length and looping in the for loop are still applicable
let tags=document.getElementsByTagName("li");
console.log(tags);


//queryselector
let check=document.querySelector("#book-list li:nth-child(2) .name");
console.log(check);//check is the second element of the li tags to select the second li tag only we li:nth-child(2) 
//nth-child(2) is a pseudo-class and gives the 2nd element
let check_list=document.querySelectorAll("#book-list li .name");
console.log(check_list);//returns a nodelist 
//queryselector just gives us only one element and returns the first occurence of the element 
//whereas the querySelectorAll returns all the elemnts mentioned in the query

//Nodelist can be treated as Array and function like forEach can work on Nodelist
//but the same is not true in case of HTML collections we have to convert it into an Array

check_list.forEach(function(book){
//console.log(book.textContent);//gives the text in the span tag
book.textContent+=" checked";

});


let list=document.querySelector("#book-list");
list.innerHTML+='<p>Im in the para</p>';

//once we select the element which we wanna change we can use that variable for innerHTML
//all the text within the innerHTML is either added or replaced
//document.write("hi"); just writes at the end of the documents
let banner=document.querySelector("#page-banner");//this creates the connection with the HTML element
console.log(banner.nodeType);
console.log(banner.nodeName);

let clone=banner.cloneNode(true);//we need to write true to get all the child nodes if write fase only the div element will be copied
console.log(clone);

console.log()

console.log(banner.parentElement);
console.log(banner.parentElement.parentElement);//it goes two steps above
console.log(banner.children);//if we say children element it will give #text which are linebreaks and are completely unnecessary
//but in case if we have parentelement we will get always a HTML element never a linebreak
let book=document.querySelector("#book-list");
console.log(book.nextSibling);//will give a next a #text which is line break
console.log(book.nextElementSibling);//gives the next HTML element not a linebreak
console.log(book.previousElementSibling);//gives the previous HTML element not a linebreak
 book.nextElementSibling.querySelector("button").innerHTML="Done";//equivalent to writing querySelector("#add-book button").innerHTML="Done";
//first we creating a connection with the form then querying using the selector and then we replacing the innerHTML.


//Events

//click mouseover onload onclick etc.
//to remove the list of the books when we press delete add an Eventlister to the Nodelist of buttons
let btns=document.querySelectorAll("#book-list .delete");
console.log(btns);
btns.forEach((btn)=>{
    btn.addEventListener("click",function(e){
let li=e.target.parentElement;//e.target is the button itself and its parent elemnt is li
//e is the event and e.target returns the button on which the event listener is been placed
li.parentElement.removeChild(li);//removes each book in the list as li parent element is ul
    });


});
//prevent default behaviour
// let anch=document.querySelector("#add-book a");
// anch.addEventListener("click",function(e){
//     console.log(e);
// e.preventDefault();//prevent the default beahviour when the event has occurred
// //these methods are exclusive to events not available in the HTML elements therefore e.target.preventDefault() won't work 
//     console.log(e.target.textContent,"cant get");//textContent is a JS property 
// });

//event bubbling
//it is better the handle the events of the parent first then go to the child as in case of 
//the form whenever we add a new book the button is not associated with the event therefore we go parent to child

const list1=document.querySelector("#book-list ul");
list1.addEventListener("click",function(e){
if(e.target.className=="delete"){//whenever the target which has a class name delete is clicked execute the following code
//e.target gives the element which is being clicked it could be ul li or button but the code is only executed when the button is 
//clicked as it has a class name delete.
    let li=e.target.parentElement;

list1.removeChild(li);

}
});

//Forms 
//add book

let addform=document.forms["add-book"];//just say document.forms and in square bracket mention the id name only
console.log("hi");
addform.addEventListener("submit",function(e){
e.preventDefault();//prevents the default action of the form to reload the page
let value=addform.querySelector("input[type='text']").value;
 console.log(value);

//create a new book
let li1=document.createElement("li");
let name=document.createElement("span");
let deletebtn1=document.createElement("span");
//this part creates a new book with li tags and two span tags



//this part adds the text contents to the HTML elements
name.textContent=value;//value obtained after submitting the form
deletebtn1.textContent="delete"

//use to add the attributes ike class href id etc
//to remove attribute we say x.removeAttribute("type") type=class, href or id
//to get the name of the attribute we say x.getAttribute("type") type=class, href or id
//x.hasAttribute("type") will return true or false.
name.setAttribute("class",'name');
//the name goes to the class list which is a property of the element add we add the new classes 
//by x.classList+=" name"
name.classList+="name2";
deletebtn1.setAttribute("class",'delete');

//After creating all textsz and classes we append the nodes to the parent node by .appendChild method
li1.appendChild(name);
li1.appendChild(deletebtn1);

//After appending into li we append it into ul to completely add the elements and then the created element is now part of the HTML and the styling will be aplied to it
list1.appendChild(li1);


});
//the submit is the added to the form not to the button as we click the button the form is submited
//input[type="text"].value will give the value entered by user in the input field with text type



//CHANGE EVENT
//change event in a form occurs when a check box is selected etc.


let hide=document.forms["add-book"];
console.log(hide);
hide.addEventListener("change",function(e){
    console.log(e.target);
if(e.target.checked){//e.target will give the element being checked or being changed

    list1.style.display="none";//every HTML element has CSS style associated to it
//to change the stye of the HTML element we just write element.style.CSSproperty="something"
}//here the event is onchange on the form when the check box is checked hide.checked gives 1 else 0
//list1 is ul and its display=none when checked and all elements are vanished
//display equal to initial will give usual display.
else{
    list1.style.display="block";
    
}
});

//Search filter
//can be done by key event listener

const search=document.forms["search-books"];
search.addEventListener("keyup",function(e){//keyup is an event which is triggered 
    // whenever the user releases the key the event is generated

console.log(e.target);
let term=e.target.value.toLowerCase();//this the amount the user has inputed
let books=list1.querySelectorAll("li");//gives a nodelist which can be iterated
books.forEach(function(book){
    console.log(book.textContent);
    let title=book.firstElementChild.textContent.toLowerCase();//the contents of the li with firstElementChild are made to lower 
    //case to prevent delete to be included
    if(title.indexOf(term)!=-1){//string method which compares whether the term is present or not.If not present it will return -1
        book.style.display="block";

    }else{
        book.style.display="none";//when the element is not present the books dissappear.
    }
});
});

//TABBED CONTENT

let tabs=document.querySelector(".tabs");
let panels=document.querySelectorAll(".panel");//the panel class contains the data of the tabs that are to be shown
 console.log(panels[0]);
tabs.addEventListener("click",function(e){//event listener on the ul so that in future if add a new tab then the process will not be hindered

// console.log(e.target);
// console.log(e.target.dataset.target);

let targetpanel=document.querySelector(e.target.dataset.target);//dataset.target is nothing but data-target of HTML
console.log(targetpanel);//whatever the target tab is being clicked the data-target sends the id which is then quereied later on
//the id which will be queried later on returns the whole div class panel then the camparison takes place
panels.forEach(function(panel){
if(panel==targetpanel){ //compares the the target with existing nodelist 
panel.classList.add("active");//if same we add active if active aready there it just overwrites it no repetition occurs in 
//classname as active active 
}
else{
    panel.classList.remove("active");//removes the active in the classlist 
}
});
//rest display is handled by CSS

});

//queryselector returns nodelist and getelementbysomething returns a HTML collections
});





