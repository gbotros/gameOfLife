import { Cell } from './Cell';

export class Grid {

  public cells: Cell[][];

  constructor(rowsCount: number, colsCount: number) {
    this.cells = new Array(rowsCount);
    for (let r = 0; r < rowsCount; r++) {
      this.cells[r] = new Array(colsCount);
      for (let c = 0; c < colsCount; c++) {
        this.cells[r][c] = new Cell(r, c, ((r + c) % 2) === 0);
      }
    }
  }

}

export const NullGrid: Grid = new Grid(0, 0);



