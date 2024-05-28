let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Fan name, " + myName;
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Fan name, " + storedName;
}
myButton.addEventListener("click", function () {
  setUserName();
});

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lewis.webp") {
    myImage.setAttribute("src", "images/lewisphoto.jfif");
  } else {
    myImage.setAttribute("src", "images/lewis.webp");
  }
});