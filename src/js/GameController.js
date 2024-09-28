export default class GameController {
    constructor(cellsSelector) {
      this.cells = cellsSelector.querySelectorAll(".cell");
     this.goblinHead = cellsSelector.querySelector('.head');
      this.activeCell = 0;
      this.nextCell = 0;
    }
    nextTurn() {
  
    setInterval(() => {
      
      while (this.nextCell === this.activeCell) {
        this.nextCell = Math.floor(Math.random() * this.cells.length);
      }
      this.activeCell = this.nextCell;
      this.cells[this.nextCell].appendChild(this.goblinHead);
    
    },1000);
  }}