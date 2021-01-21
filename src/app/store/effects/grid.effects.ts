import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GridService } from 'src/app/services/grid.service';
import { GridActions, loadAllPatternsAction, loadAllPatternsFailureAction, loadAllPatternsSuccessAction, savePatternAction, savePatternFailureAction, savePatternSuccessAction } from '../actions/grid.actions';



@Injectable()
export class GridEffects {
  constructor(private actions$: Actions, private gridService: GridService) { }

  save$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savePatternAction),
      mergeMap(action => this.gridService.save(action.name, action.grid)
        .pipe(
          map(() => {
            return savePatternSuccessAction();
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
          map(() => loadAllPatternsSuccessAction()),
          catchError((error) => of(loadAllPatternsFailureAction({ error })))
        ))
    );
  });


}
