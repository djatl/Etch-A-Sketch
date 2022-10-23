console.log("I'm in sketch.js!");

// update grid size when button pressed
const button = document.querySelector('button');
//console.log("button = "+button);

// build 16x16 grid
// const myGrid = document.querySelector('#grid');
// const myGrid = document.querySelector('div[id="grid"');
const myGrid = document.querySelector('div.grid');
//console.log("myGrid = " + myGrid);



// make up a grid of divs
function createGrid(gridSize) {
    //console.log("grid width"+deviceWidth);
    let celldiv;
    let rowdiv;
    let xy='';
    for (let j = 0; j < gridSize; j++) {
        rowdiv = document.createElement('div');
        rowdiv.classList.add("row");

        for (let i = 0; i<gridSize; i++) {

            celldiv = document.createElement('div');
            celldiv.classList.add("cell");
            xy = i+'-'+j;
            celldiv.setAttribute('id',xy);
            //console.log(celldiv);
            rowdiv.appendChild(celldiv);
        }
        
        myGrid.appendChild(rowdiv);
    }
    const cells = Array.from(document.querySelectorAll('.cell'));
    // cells.forEach(cell => cell.addEventListener('mouseenter', hover));
    cells.forEach(cell => cell.addEventListener('mouseover', hover));
}

function hover(e) {

    let celldiv = e.target;

    if (celldiv == null) {
        console.log("celldiv is null: "+celldiv);
        return;
    }
    if (celldiv.classList.contains('hover')) return;
    celldiv.classList.add('hover');
    e.stopPropagation();
}


function resize() {
    let gridSize = prompt("Enter grid size: ");
    // todo: need to enforce that it's a number

    //delete current grid
    while (myGrid.firstChild) {
        myGrid.removeChild(myGrid.firstChild);
    }
    createGrid(gridSize);
}

button.addEventListener('click',resize);

let gridSize = 16;
createGrid(gridSize);

