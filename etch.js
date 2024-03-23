const body = document.body
const container = document.querySelector(".container")
let numBox = 16;
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.height = "800px";
container.style.width = "800px";
container.style.border = "1px solid black";
function createDiv(numBox) {
    for (let x=0; x<numBox; x++){
        const div = document.createElement("div");
        div.classList.add("row");
        container.appendChild(div);
        for (let y=0; y<numBox; y++){
            const div2 = document.createElement("div");
            div2.classList.add("box");
            div.appendChild(div2);
        }
    }
}
function removeDiv() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    })
    
}


function createGrid(numBox){
    removeDiv();
    createDiv(numBox);
    const rows = document.querySelectorAll(".row");
    const boxes = document.querySelectorAll(".box");
    rows.forEach(row => {
        row.style.display = "flex";
        row.style.boxSizing = "border-box";
        row.style.height = (100 / numBox) + "%";
    });
    
    boxes.forEach(box => {
        //box.style.border = "1px solid black";
        box.style.boxSizing = "border-box";
        box.style.width = (100 / numBox) + "%";
        box.style.aspectRatio = "1 / 1";
        box.style.flexGrow = "auto";

    });
    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            if (e.buttons ===1) {
                box.style.backgroundColor = "black";
            }
        });
    })
    const reset = document.querySelector(".reset")
    reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    })

}

function isNumber(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const gridSize = document.querySelector(".gridsize");
gridSize.addEventListener("click", () => {
    let input = parseInt(prompt("Enter a grid size (max 100): "));
    if (isNumber(input) && input > 0 && input <= 100){
        createGrid(input);
    }
    else {
        alert("Try again please srry");
    }
})
createGrid(numBox);

//TODO
//Make it so that the max input is 100
//Make it look good (?)