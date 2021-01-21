import { createAction, props, union } from '@ngrx/store';
import { Grid } from 'src/app/models/grid';

export enum GridActions {
  NextDay = '[GameOfLife] NextDay',
  DrawGliderPattern = '[GameOfLife] DrawGliderPattern',
  FlipCellAction = '[GameOfLife] FlipCellAction',

  SavePattern = '[GameOfLife] SavePattern',
  SavePatternSuccess = '[GameOfLife] SavePatternSuccess',
  SavePatternFailure = '[GameOfLife] SavePatternFailure',

  LoadAllPatterns = '[GameOfLife] LoadAllPatterns',
  LoadAllPatternsSuccess = '[GameOfLife] LoadAllPatternsSuccess',
  LoadAllPatternsFailure = '[GameOfLife] LoadAllPatternsFailure'
}

export const nextDayAction = createAction(
  GridActions.NextDay
);

export const drawGliderPatternAction = createAction(
  GridActions.DrawGliderPattern
);

export const flipCellAction = createAction(
  GridActions.DrawGliderPattern
);

export const savePatternAction = createAction(
  GridActions.SavePattern,
  props<{ name: string, grid: Grid }>()
);
export const savePatternSuccessAction = createAction(
  GridActions.SavePatternSuccess
);
export const savePatternFailureAction = createAction(
  GridActions.SavePatternFailure,
  props<{ error: string }>()
);

export const loadAllPatternsAction = createAction(
  GridActions.LoadAllPatterns
);
export const loadAllPatternsSuccessAction = createAction(
  GridActions.LoadAllPatternsSuccess
);
export const loadAllPatternsFailureAction = createAction(
  GridActions.LoadAllPatternsFailure,
  props<{ error: string }>()
);
