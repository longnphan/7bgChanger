const body = document.querySelector("body");
const circle = document.querySelectorAll(".circle");

circle.forEach(function(button) {
  button.addEventListener("click", function(event){
    if (event.target.id === "red") body.style.backgroundColor = event.target.id;

    if (event.target.id === "orange") body.style.backgroundColor = event.target.id;

    if (event.target.id === "yellow") body.style.backgroundColor = event.target.id;

    if (event.target.id === "green") body.style.backgroundColor = event.target.id;

    if (event.target.id === "blue") body.style.backgroundColor = event.target.id;
   })
 })
