export class Cell {

  constructor(row: number, col: number, isAlive: boolean) {
    this._row = row;
    this._col = col;
    this._isAlive = isAlive;
  }

  private _row: number;
  public get row(): number {
    return this._row;
  }

  private _col: number;
  public get col(): number {
    return this._col;
  }

  private _isAlive: boolean;
  public get isAlive(): boolean {
    return this._isAlive;
  }

  public Live(): void {
    this._isAlive = true;
  }

  public Die(): void {
    this._isAlive = false;
  }

  public Flip(): void {
    this._isAlive = !this.isAlive;
  }

  public update(isAlive: boolean): void {
    if (isAlive) {
      this.Live();
    }
    else {
      this.Die();
    }
  }

}

export const NullCell: Cell = new Cell(-1, -1, false);
