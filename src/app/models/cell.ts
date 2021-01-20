export class Cell {

  constructor(row: number, col: number, isAlive: boolean) {
    this.row = row;
    this.col = col;
    this.isAlive = isAlive;
  }

  public row: number;
  public col: number;
  public isAlive: boolean;

  public Live(): void {
    this.isAlive = true;
  }

  public Die(): void {
    this.isAlive = false;
  }

  public Flip(): void {
    this.isAlive = !this.isAlive;
  }
}

export const NullCell: Cell = new Cell(-1, -1, false);
