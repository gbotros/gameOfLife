import { createAction, props, union } from '@ngrx/store';
import { Grid } from 'src/app/models/grid';

export enum GridActions {
  NextDay = '[GameOfLife] NextDay',
  DrawGliderPattern = '[GameOfLife] DrawGliderPattern',
  FlipCellAction = '[GameOfLife] FlipCellAction',

  SorePattern = '[GameOfLife] SorePattern',
  SorePatternSuccess = '[GameOfLife] SorePatternSuccess',
  SorePatternFailure = '[GameOfLife] SorePatternFailure',

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

export const storePatternAction = createAction(
  GridActions.SorePattern
);
export const storePatternSuccessAction = createAction(
  GridActions.SorePattern
);
export const storePatternFailureAction = createAction(
  GridActions.SorePattern
);

export const loadAllPatternsAction = createAction(
  GridActions.LoadAllPatterns
);

export const loadAllPatternsSuccessAction = createAction(
  GridActions.LoadAllPatterns
);

export const loadAllPatternsFailureAction = createAction(
  GridActions.LoadAllPatterns
);
