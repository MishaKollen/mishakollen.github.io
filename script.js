let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let btnDone = document.getElementsByClassName("buttonDone");


function inputLength() {
 return input.value.length;
}

function createListElement() {
 let li = document.createElement("li");
 
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  let btnDone = document.createElement("button");
  btnDone.innerHTML = "Done";
  let btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Delete";
  li.appendChild(btnDone);
  li.appendChild(btnDelete);
  btnDone.addEventListener("click", function () {
    if (btnDone.innerHTML === "Done") {
btnDone.parentElement.classList.toggle("done");
btnDone.innerHTML = "Undone";
    } else {
      btnDone.innerHTML = "Done";
      btnDone.parentElement.classList.toggle("done");
    }
   
  });
  btnDelete.addEventListener("click", function() {
    btnDelete.parentElement.remove();
  })
}


function addListAfterClick() {
if (inputLength() > 0) {
 createListElement() }
}


function addListAfterKeypress(event){
 if (inputLength() > 0 && event.key === "Enter") {
  createListElement() }
}

function toggleElement(event) {
  console.log("btnDone");
  // btnDone.parentElement.classList.add("done-undone");
  // btnDone.parentElement.classList.toggle("done-undone");
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

btnDone.addEventListener("click", toggleElement);