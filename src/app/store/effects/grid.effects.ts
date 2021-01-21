import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GridService } from 'src/app/services/grid.service';
import { GridActions, loadAllPatternsAction, loadAllPatternsFailureAction, loadAllPatternsSuccessAction, removePatternAction, removePatternFailureAction, removePatternSuccessAction, savePatternAction, savePatternFailureAction, savePatternSuccessAction } from '../actions/grid.actions';



@Injectable()
export class GridEffects {
  constructor(private actions$: Actions, private gridService: GridService) { }

  save$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savePatternAction),
      mergeMap(action => this.gridService.save(action.name, action.grid)
        .pipe(
          map(() => {
            return savePatternSuccessAction({ name: action.name, grid: action.grid });
          }),
          catchError((error) => of(savePatternFailureAction({ error })))
        ))
    );
  });

  loadAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAllPatternsAction),
      mergeMap(action => this.gridService.loadAll()
        .pipe(
          map((allGrids) => loadAllPatternsSuccessAction(allGrids)),
          catchError((error) => of(loadAllPatternsFailureAction({ error })))
        ))
    );
  });

  remove$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removePatternAction),
      mergeMap(action => this.gridService.remove(action.name)
        .pipe(
          map(() => removePatternSuccessAction({ name: action.name })),
          catchError((error) => of(removePatternFailureAction({ error })))
        ))
    );
  });

}
