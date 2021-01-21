import { Action, createReducer, on } from '@ngrx/store';
import { Grid, DefaultGrid } from 'src/app/models/grid';
import {
  drawGliderPatternAction,
  flipCellAction,
  nextDayAction,
  savePatternAction,
  savePatternFailureAction,
  savePatternSuccessAction
} from '../actions/grid.actions';


export const gameReducerFeatureKey = 'gameReducer';

export interface State {
  currentGrid: Grid;
}

export const initialState: State = {
  currentGrid: DefaultGrid
};

const gameReducer = createReducer(
  initialState,
  on(nextDayAction, (state: State): State => ({
    ...state,
    currentGrid: state.currentGrid.next()
  })),
  on(drawGliderPatternAction, (state: State): State => ({
    ...state,
    currentGrid: state.currentGrid.getGliderPatternGrid()
  })),
  on(flipCellAction, (state: State): State => {
    return {
      ...state,
      currentGrid: state.currentGrid.getGliderPatternGrid()
    };
  }
  ),

  on(savePatternSuccessAction, (state: State): State => {
    return {
      ...state
    };
  }
  ),

  on(savePatternFailureAction, (state: State): State => {
    return {
      ...state
    };
  }
  ),

  on(savePatternAction, (state: State): State => {
    return {
      ...state
    };
  }
  ),


);

export function reducer(state: State | undefined, action: Action): State {
  return gameReducer(state, action);
}
