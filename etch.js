const body = document.body
const container = document.querySelector(".container")
for (let x=0; x<16; x++){
    const div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    for (let y=0; y<16; y++){
        const div2 = document.createElement("div");
        div2.classList.add("box");
        div.appendChild(div2);
    }
}
const rows = document.querySelectorAll(".row");
const boxes = document.querySelectorAll(".box");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.height = "1400px";
container.style.width = "1400px";
rows.forEach(row => {
    row.style.display = "flex";
    row.style.boxSizing = "border-box";
    row.style.height = (100 / 16) + "%";
})

boxes.forEach(box => {
    box.style.border = "1px solid black";
    box.style.boxSizing = "border-box";
    box.style.width = (100 / 16) + "%";
    box.style.aspectRatio = "1 / 1";
    box.style.flexGrow = "auto";
})

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
})