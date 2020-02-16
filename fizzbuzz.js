console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const reset = document.getElementById("Resetbtn");
const maxInp = document.querySelector("#maxInput");
const minInp = document.querySelector("#minInput");
const sbtn = document.getElementById("subbtn");
const fizzbtn = document.getElementById("fzbtn");
const buzzbtn = document.getElementById("bzbtn");
const fizzbuzzbtn = document.getElementById ("fzbzbtn");
const gameGrid = document.querySelector("#game_grid");



function onClick(event) {
    console.log("Event of type", event.type);
    const cl = event.currentTarget;
    console.log("My id is", cl.id);
    const num_str=cl.id.slice(2);
    const num = parseInt(num_str);
    if (isNaN(num))
    {
        return; 
    } 

console.log("My number is",num ); 
//console.log(`onClick${i}`);

if (num % 5 === 0 && num % 3 === 0) {
cl.classList.add("fizzbuzz_selected");
console.log("This is fizzbuzz");
}
else if (num % 3 == 0) {
    cl.classList.add("fizz_selected");
    console.log("This is fizz");    
}
else if (num % 5 == 0) {
    cl.classList.add("buzz_selected"); 
    console.log("This is buzz");   
} 
} 


function onShowAllFiz() {
    const allFizzCells = document.getElementsByClassName("fizz");
    for (let i=0;i<allFizzCells.length;i++) {
        allFizzCells[i].classList.add("fizz_selected");
    }           
 }

function onShowAllBuzz(){
    const allBuzzCells = document.getElementsByClassName("buzz");
    for (let i = 0; i<allBuzzCells.length; i++) {
        allBuzzCells[i].classList.add("buzz_selected");
    }
}

function onShowAllFizzBuzz () {
    const allFizzBuzzCells = document.getElementsByClassName ("fizzbuzz");
    for (let i=0; i<allFizzBuzzCells.length; i++){
    allFizzBuzzCells[i].classList.add("fizzbuzz_selected");
    }
} 

function onClear() {
console.log (`My starting value is ${minInp.value}`);
console.log (`My ending Value is ${maxInp.value}`);
console.log("Clear all cells");  
while (gameGrid.firstChild) {
    gameGrid.removeChild(gameGrid.firstChild);
}
}

function onCreate(){
console.log("Adding new cells");
const min = parseInt(minInp.value);
const max = parseInt(maxInp.value);

if (min > max) {
    console.log(`Starting value must be >= than ending value`);
    return;
}

for (let i = min; i <= max; i++) {
  
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerText = i;

    let className = '';
    if (i % 5 === 0 && i % 3 === 0) {
        className = 'fizzbuzz';
        console.log("This is fizzbuzz");
        }
        else if (i % 3 == 0) {
            className = 'fizz';
            console.log("This is fizz");    
        }
        else if (i % 5 == 0) {
            className = 'buzz'; 
            console.log("This is buzz");   
    }
    else {
        className = 'num';
    }
 
newCell.classList.add(className);
newCell.id = `sq${i}`;
newCell.addEventListener("click", onClick);
gameGrid.appendChild(newCell);
}
}

function addListeners() {
   console.log("Adding Listeners");
   console.log(cell.length);
   reset.addEventListener("click", onReset);
   buzzbtn.addEventListener("click", onShowAllBuzz);
   fizzbtn.addEventListener("click", onShowAllFiz);
   fizzbuzzbtn.addEventListener("click", onShowAllFizzBuzz);
   sbtn.addEventListener("click", onClear);
   sbtn.addEventListener("click", onCreate);
   minInp.addEventListener('click', onClick);
   maxInp.addEventListener('click', onClick);
   console.log("Submit data");
   for (let i=0; i < cell.length; i++){
    const cl = cell[i]; 
    console.log(cl.id);
    cl.addEventListener("click", onClick); 
}
}   

function onReset() {
for (let i=0; i < cell.length; i++){
    const c = cell[i];
    c.classList.remove("buzz_selected");
    c.classList.remove("fizz_selected");
    c.classList.remove("fizzbuzz_selected");
    console.log("Resetting Game");
}
}
    
function main (){
    console.log("Running main");
    addListeners();
}
main();