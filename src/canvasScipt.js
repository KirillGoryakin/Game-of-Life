import Store from "./Store";
import { deepCopy } from './utils';

let canvas = null;
let ctx = null;
const cellSize = 32;
let cells = [];

const setCanvasSize = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = window.innerHeight;
};

const generateField = () => {
  let cols = 0;
  for (let x = 0; x < canvas.width; x += cellSize){
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    cols++;
  }

  let rows = 0;
  for (let y = 0; y < canvas.height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    rows++;
  }

  for (let x = 0; x < cols; x++){
    cells.push([]);
    for (let y = 0; y < rows; y++) {
      cells[x].push(false);
    }
  }
};

const cellExists = (cx, cy) =>
  typeof cells[cx] !== 'undefined'
  && typeof cells[cx][cy] !== 'undefined';

const getNeighbours = (cx, cy) => {
  let aliveNeighbours = 0;
  let deadNeighbours = 0;
  
  for (let i = cx - 1; i <= cx + 1; i++) {
    for (let j = cy - 1; j <= cy + 1; j++) {
      if (i !== cx || j !== cy) {
        if(cellExists(i, j)){
          if (cells[i][j]) aliveNeighbours++;
          else deadNeighbours++;
        }
      }
    }
  }

  return [aliveNeighbours, deadNeighbours];
};

const draw = (cx, cy, cell = false) => {
  cells[cx][cy] = cell;
  
  ctx.fillStyle = cell ? 'black' : 'white';
  ctx.fillRect(cx * cellSize + 1, cy * cellSize + 1, cellSize - 2, cellSize - 2);
};

const updateCells = (newCells = [...cells]) => {
  for (let cx = 0; cx < newCells.length; cx++) {
    for (let cy = 0; cy < newCells[0].length; cy++) {
      draw(cx, cy, newCells[cx][cy]);
    }
  }

  cells = [...newCells];
};

const handleClick = (e) => {
  const x = e.clientX - canvas.offsetLeft,
        y = e.clientY - canvas.offsetTop,
        cx = Math.floor(x / cellSize),
        cy = Math.floor(y / cellSize);

  const cell = !cells[cx][cy];
  draw(cx, cy, cell);
};

export const step = () => {
  let newCells = deepCopy(cells);
  
  for (let cx = 0; cx < cells.length; cx++) {
    for (let cy = 0; cy < cells[0].length; cy++) {
      const current = cells[cx][cy];
      const [aliveNeighbours] = getNeighbours(cx, cy);

      if (current) {
        if (aliveNeighbours < 2 || aliveNeighbours > 3)
          newCells[cx][cy] = false;
      } else {
        if (aliveNeighbours === 3)
          newCells[cx][cy] = true;
      }
    }
  }

  updateCells(newCells);
  Store.addSteps();
};

export const canvasScript = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  setCanvasSize();

  generateField();

  canvas.addEventListener('mousedown', handleClick);
  canvas.onselectstart = () => false;
};