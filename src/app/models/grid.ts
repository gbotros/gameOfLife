import { Cell } from './cell';

export class Grid {

  public cells: Cell[][];
  private rowsCount: number;
  private colsCount: number;

  constructor(rowsCount: number, colsCount: number) {

    if (rowsCount < 0) { throw new Error('Invalid rowsCount'); }
    if (colsCount < 0) { throw new Error('Invalid colsCount'); }

    this.rowsCount = rowsCount;
    this.colsCount = colsCount;
    this.cells = new Array(rowsCount);
    for (let r = 0; r < rowsCount; r++) {
      this.cells[r] = new Array(colsCount);
      for (let c = 0; c < colsCount; c++) {
        this.cells[r][c] = new Cell(r, c, false);
      }
    }
  }

  public static copy(original: Grid): Grid {
    const copyGrid = new Grid(original.rowsCount, original.colsCount);

    for (let r = 0; r < original.rowsCount; r++) {
      for (let c = 0; c < original.colsCount; c++) {

        if (original.cells[r][c].isAlive) {
          copyGrid.cells[r][c].Live();
        }
        else {
          copyGrid.cells[r][c].Die();
        }
      }
    }

    return copyGrid;
  }

  public next(): Grid {
    const nextGrid = new Grid(this.rowsCount, this.colsCount);

    // update the temporary next array
    for (let r = 0; r < this.rowsCount; r++) {
      for (let c = 0; c < this.colsCount; c++) {
        const lod = this.liveOrDie(r, c);
        nextGrid.updateCell(r, c, lod);
      }
    }

    return nextGrid;
  }

  public getGliderPatternGrid(): Grid {

    const gliderGrid = new Grid(this.rowsCount, this.colsCount);
    gliderGrid.killAll();
    gliderGrid.cells[0][0].Live();
    gliderGrid.cells[1][1].Live();
    gliderGrid.cells[2][1].Live();
    gliderGrid.cells[0][2].Live();
    gliderGrid.cells[1][2].Live();

    return gliderGrid;
  }

  public killAll(): void {
    for (let r = 0; r < this.rowsCount; r++) {
      for (let c = 0; c < this.colsCount; c++) {
        this.cells[r][c].Die();
      }
    }
  }

  public updateCell(row: number, col: number, isAlive: boolean): void {
    this.cells[row][col].update(isAlive);
  }

  private liveOrDie(r: number, c: number): boolean {
    const isAlive = this.isAlive(r, c);
    const liveNeighbors = this.countLiveNeighbors(r, c);
    let newStatus = false;

    if (liveNeighbors === 3) { newStatus = true; }
    if (isAlive && liveNeighbors === 2) { newStatus = true; }

    return newStatus;
  }

  private countLiveNeighbors(r: number, c: number): number {
    const up = this.isAlive(r - 1, c);
    const upRight = this.isAlive(r - 1, c + 1);
    const right = this.isAlive(r, c + 1);
    const downRight = this.isAlive(r + 1, c + 1);
    const down = this.isAlive(r + 1, c);
    const downLeft = this.isAlive(r + 1, c - 1);
    const left = this.isAlive(r, c - 1);
    const upLeft = this.isAlive(r - 1, c - 1);

    const count = up + right + down + left + upRight + downRight + downLeft + upLeft;
    return count;
  }

  private isAlive(r: number, c: number): number {
    if (r < 0) { return 0; }
    if (c < 0) { return 0; }
    if (r >= this.rowsCount) { return 0; }
    if (c >= this.colsCount) { return 0; }

    return +this.cells[r][c].isAlive;
  }

}

export const DefaultGrid: Grid = new Grid(10, 10);
