import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell, NullCell } from '../models/cell';

@Component({
  selector: 'gol-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input()
  public cell: Cell;
  constructor() {
    this.cell = NullCell;
  }

  @Output()
  public cellClicked = new EventEmitter<Cell>();

  public click(): void {
    this.cellClicked.emit(this.cell);
  }
}
