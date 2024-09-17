/**
 * * Single Element Selector
 */

const header = document.getElementById("header");
header.style.color = "red";

const uniquepara = document.querySelector("#unique-para");
uniquepara.style.border = "2px solid red";

const another = document.querySelector(".info");

/**
 * * Multiple Element Selector
 */
const myTags = document.getElementsByTagName("p");
for (let i = 0; i < myTags.length; i++) {
  const element = myTags[i];
  element.style.backgroundColor = "green";
  element.style.fontSize = "40px";
}
const allClassElements = document.getElementsByClassName("info");

for (const element of allClassElements) {
  element.style.border = "5px solid blue";
}

const myParas = document.querySelectorAll(".info");

/**
 * * Nodes VS Element in DOM
 */

const container2 = document.querySelector(".container2");
// console.log(container2.childNodes);
// console.log(container2.children);

/**
 * * children || nextElementSibling Vs nextSibling ||previousElementSibling
 */

const item2 = document.getElementById("item2");

const parent = item2.parentElement;
const previousSibling = item2.previousElementSibling;
const nextElementSibling = item2.nextElementSibling;

const nextSomething = item2.nextSibling;

/**
 * * innerText || textContent || innerHTML
 */

const container4 = document.querySelector(".container4");
// console.log(container4.innerText);
// console.log(container4.textContent);
// console.log(container4.innerHTML);

/**
 * * setAttribute() || getAttribute()  || removeAttribute()
 */

const myBtn = document.getElementById("myButton");
myBtn.setAttribute("class", "btn btn-primary");
myBtn.setAttribute("disabled", true);
myBtn.setAttribute("id", "myid");
myBtn.removeAttribute("disabled");
const myLink = document.getElementById("myLink");
const link = myLink.getAttribute("href");

/**
 * * Creating an element and append ||Add class name  || classList[add(),remove()] ||append Child vs append || remove() or remove Child()
 */

const container5 = document.querySelector(".container5");

const p = document.createElement("p");
p.innerText = "I am created by js dynamically ";

container5.appendChild(p);

const h1 = document.createElement("h1");
h1.textContent = "I am h1 , and i can inject to html through js";

// h1.classList.add("common-class");
h1.className = "common-class";
h1.classList.remove("common-class");
// container5.appendChild(h1);

container5.append(h1, "Habijibajie ...");

// remove and remove child
// container5.remove();

container5.removeChild(h1);
container5.removeChild(p);
