function generateGrids() {
    let size = prompt("Enter the number of squares per side of the new grids (between 1 and 100):");
    size = Number(size);
    document.documentElement.style.setProperty("--size", 100 / size + "%");

    if(size >= 1 && size <= 100) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        for(let i = 0; i < size * size; i++) {
            const grid = document.createElement("div");
            container.appendChild(grid);
            grid.addEventListener("mouseover", function() {
                this.style.backgroundColor = "black"});
        }
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

const button = document.getElementById("button");
const container = document.getElementById("container");
button.addEventListener("click", generateGrids);
