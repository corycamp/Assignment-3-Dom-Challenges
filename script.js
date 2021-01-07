// 1 - Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

// 2 - Select the section with an id of container using the querySelector.
let container2 = document.querySelector("#container");

// 3 - Select all of the list items with a class of "second".

let list_second = document.querySelector("li.second");


// 4 Select a list item with a class of third, but only the list item inside of the ol tag.

let list_third = document.querySelector(ol > li.third);


// 5 Give the section with an id of container the text "Hello!".

let greet = document.createTextNode("Hello!");

container.appendChild(greet);

// 6 Add the class main to the div with a class of footer.

let footer = document.querySelector("div.footer");

footer.classList.add("main"); 

// 7 Remove the class main on the div with a class of footer.

footer.classList.remove("main");

// 8 Create a new li element.

let node = document.createElement("li");

// 9 Give the li the text "four".

let text = document.createTextNode("four");

node.appendChild(text);

// 10 Append the li to the ul element.
let ul = document.querySelector(ul);

ul.appendChild(node);

// 12 Loop over all of the lis inside the ol tag and give them a background color of "green".

let ol = document.querySelector(ol);

let lis = ol.getElementByTagName("li");

for(var i = 0; i < lis.length; i++){
	lis[i].style.background("green");
}


// 13 Remove the div with a class of footer.

footer.remove();
