import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../models/Cell';
import { Grid, NullGrid } from '../models/grid';

@Component({
  selector: 'gol-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public grid: Grid;

  private _rowsCount: number;
  @Input()
  public set rowsCount(value: number) {
    this._rowsCount = value;
    this.initGrid();
  }
  public get rowsCount(): number {
    return this._rowsCount;
  }

  private _colsCount: number;
  @Input()
  public set colsCount(value: number) {
    this._colsCount = value;
    this.initGrid();
  }
  public get colsCount(): number {
    return this._colsCount;
  }

  constructor() {
    this._rowsCount = 0;
    this._colsCount = 0;
    this.grid = NullGrid;
  }

  ngOnInit(): void {

  }

  public initGrid(): void {
    if (this.colsCount && this.rowsCount) {
      console.log(`${this.rowsCount}, ${this.colsCount}`);
      this.grid = new Grid(this.rowsCount, this.colsCount);
    }
  }

  public cellClicked(cell: Cell): void {
    cell.Flip();
  }

  public next(): void {
    this.grid.next();
  }
}
