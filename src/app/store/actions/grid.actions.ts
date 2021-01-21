import { createAction, props, union } from '@ngrx/store';
import { Grid } from 'src/app/models/grid';

export enum GridActions {
  NextDay = '[GameOfLife] NextDay',
  DrawGliderPattern = '[GameOfLife] DrawGliderPattern',
  FlipCellAction = '[GameOfLife] FlipCellAction',
  DrawPatternAction = '[GameOfLife] DrawPatternAction',
  SetGridSizeAction = '[GameOfLife] SetGridSizeAction',

  SavePattern = '[GameOfLife] SavePattern',
  SavePatternSuccess = '[GameOfLife] SavePatternSuccess',
  SavePatternFailure = '[GameOfLife] SavePatternFailure',

  LoadAllPatterns = '[GameOfLife] LoadAllPatterns',
  LoadAllPatternsSuccess = '[GameOfLife] LoadAllPatternsSuccess',
  LoadAllPatternsFailure = '[GameOfLife] LoadAllPatternsFailure',

  RemovePatternAction = '[GameOfLife] RemovePatternAction',
  RemovePatternSuccessAction = '[GameOfLife] RemovePatternSuccessAction',
  RemovePatternFailureAction = '[GameOfLife] RemovePatternFailureAction'
}

export const nextDayAction = createAction(
  GridActions.NextDay
);

export const drawGliderPatternAction = createAction(
  GridActions.DrawGliderPattern
);

export const flipCellAction = createAction(
  GridActions.FlipCellAction,
  props<{ row: number, col: number }>()
);

export const drawPatternAction = createAction(
  GridActions.DrawPatternAction,
  props<{ name: string }>()
);

export const setGridSizeAction = createAction(
  GridActions.SetGridSizeAction,
  props<{ rows: number, cols: number }>()
);

export const savePatternAction = createAction(
  GridActions.SavePattern,
  props<{ name: string, grid: Grid }>()
);
export const savePatternSuccessAction = createAction(
  GridActions.SavePatternSuccess,
  props<{ name: string, grid: Grid }>()
);
export const savePatternFailureAction = createAction(
  GridActions.SavePatternFailure,
  props<{ error: string }>()
);

export const loadAllPatternsAction = createAction(
  GridActions.LoadAllPatterns
);
export const loadAllPatternsSuccessAction = createAction(
  GridActions.LoadAllPatternsSuccess,
  props<{ allGrids: { [id: string]: Grid } }>()
);
export const loadAllPatternsFailureAction = createAction(
  GridActions.LoadAllPatternsFailure,
  props<{ error: string }>()
);

export const removePatternAction = createAction(
  GridActions.RemovePatternAction,
  props<{ name: string }>()
);
export const removePatternSuccessAction = createAction(
  GridActions.RemovePatternSuccessAction,
  props<{ name: string }>()
);
export const removePatternFailureAction = createAction(
  GridActions.RemovePatternFailureAction,
  props<{ error: string }>()
);
