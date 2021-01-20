import { Action, createReducer, on } from '@ngrx/store';
import { Grid, DefaultGrid } from 'src/app/models/grid';
import { drawGliderPatternAction, flipCellAction, nextDayAction } from '../actions/grid.actions';


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
  )
);

export function reducer(state: State | undefined, action: Action): State {
  return gameReducer(state, action);
}
