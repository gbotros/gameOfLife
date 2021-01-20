import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Cell } from '../models/cell';
import { Grid, DefaultGrid } from '../models/grid';
import { RootState } from '../store/reducers';
import * as fromGame from '../store/reducers/game-reducer.reducer';
import { getCurrentGrid } from '../store/selectors/grid.selectors';

@Component({
  selector: 'gol-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  public grid$: Observable<Grid>;


  constructor(private store: Store<RootState>) {
    this.grid$ = this.store.select(getCurrentGrid);
  }

  public cellClicked(cell: Cell): void {
    cell.Flip();
  }

}
