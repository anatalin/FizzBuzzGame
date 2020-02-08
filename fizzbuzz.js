console.log("Started FizzBuzz");
const cell = document.getElementsByClassName("cell");
const status = document.getElementById("game-status");

const resetBtn = document.getElementById("btnReset");
/* function renderGame(){
status.textContent =
}
 */
function onClick(event) {
    console.log("Event of type", event.type);
    const cl = event.currentTarget;
    console.log("My id is", cl.id);

    // cl.innerText - то, что написано на кнопке (внутри <div>)
    const num = parseInt(cl.innerText);
    // если написано не число - ничего не делаем
    if (isNaN(num))
    {
        return;
    }

    if (num % 5 === 0 && num % 3 === 0) {
        cl.classList.add("fizzbuzz_selected");
    }
    else if (num % 3 == 0) {
        cl.classList.add("fizz_selected");
    }
    else if (num % 5 == 0) {
        cl.classList.add("buzz_selected");
    }
    // renderGame();
}

function onReset() {
    for (let i = 0; i < cell.length; i++) {
        const c = cell[i];
        c.classList.remove("fizz_selected");
        c.classList.remove("buzz_selected");
        c.classList.remove("fizzbuzz_selected");
    }
}

function addListeners() {
    console.log("Adding Listeners");
    console.log(cell.length);
    for (let i = 0; i < cell.length; i++) {
        const cl = cell[i];
        //console.log(cl.id);
        //cl.setAttribute("data-value",i);
        cl.addEventListener("click", onClick);
    }

    resetBtn.addEventListener("click", onReset);
}

function main() {
    console.log("Running main");
    addListeners();
}
main();