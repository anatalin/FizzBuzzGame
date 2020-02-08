console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const status = document.getElementById("game-status");
 
/* function renderGame(){
status.textContent =
}
 */
function onClick(event) {
    console.log("Event of type", event.type);
    const cl = event.currentTarget;
    console.log("My id is", cl.id);
 
for (let i = 0; i <= 100; i++) {
    const fb = cell[i];
 
    if ( i % 5 === 0 && i % 3 === 0 ){
    fb.setAttribute(."FizzBuzz");
    console.log(onClick[9]);
}
}
renderGame();
}
 
function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
for (let i=0; i < cell.length; i++){
    const cl = cell[i];
    //console.log(cl.id);
    //cl.setAttribute("data-value",i);
    cl.addEventListener("click", onClick);
}
}
 
function main (){
    console.log("Running main");
    addListeners();
}
main();