import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Grid } from '../models/grid';
import { drawPatternAction, removePatternAction } from '../store/actions/grid.actions';
import { RootState } from '../store/reducers';
import { getAllGrids } from '../store/selectors/grid.selectors';

@Component({
  selector: 'gol-pattern-list',
  templateUrl: './pattern-list.component.html',
  styleUrls: ['./pattern-list.component.scss']
})
export class PatternListComponent {

  public allGrids$: Observable<{ [id: string]: Grid }>;
  constructor(private store: Store<RootState>) {
    this.allGrids$ = this.store.pipe(select(getAllGrids));
  }

  public onDrawClick(name: string): void {
    this.store.dispatch(drawPatternAction({ name }));
  }

  public onRemoveClick(name: string): void {
    this.store.dispatch(removePatternAction({ name }));
  }
}
