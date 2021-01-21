import { Action, createReducer, on } from '@ngrx/store';
import { Grid, DefaultGrid } from 'src/app/models/grid';
import {
  drawGliderPatternAction,
  drawPatternAction,
  flipCellAction,
  loadAllPatternsAction,
  loadAllPatternsFailureAction,
  loadAllPatternsSuccessAction,
  nextDayAction,
  removePatternAction,
  removePatternFailureAction,
  removePatternSuccessAction,
  savePatternAction,
  savePatternFailureAction,
  savePatternSuccessAction,
  setGridSizeAction
} from '../actions/grid.actions';


export const gridReducerFeatureKey = 'gridReducer';

export interface State {
  currentGrid: Grid;
  allGrids: { [id: string]: Grid };
  error: string;
}

export const initialState: State = {
  currentGrid: DefaultGrid,
  allGrids: {},
  error: ''
};

const gridReducer = createReducer(
  initialState,
  on(nextDayAction, (state: State): State => ({
    ...state,
    currentGrid: state.currentGrid.next()
  })),
  on(drawGliderPatternAction, (state: State): State => ({
    ...state,
    currentGrid: state.currentGrid.getGliderPatternGrid()
  })),
  on(flipCellAction, (state: State, { row, col }): State => {
    const currentGrid = state.currentGrid;
    currentGrid.cells[row][col].Flip();
    return {
      ...state,
      currentGrid
    };
  }),
  on(drawPatternAction, (state: State, { name }): State => {
    return {
      ...state,
      currentGrid: state.allGrids[name]
    };
  }),
  on(setGridSizeAction, (state: State, { rows, cols }): State => {
    return {
      ...state,
      currentGrid: new Grid(rows, cols)
    };
  }),

  on(savePatternAction, (state: State): State => {
    return {
      ...state
    };
  }),

  on(savePatternSuccessAction, (state: State, { name, grid }): State => {
    return {
      ...state,
      allGrids: {
        ...state.allGrids,
        [name]: grid
      }
    };
  }
  ),

  on(savePatternFailureAction, (state: State, { error }): State => {
    return {
      ...state,
      error
    };
  }
  ),


  on(loadAllPatternsAction, (state: State): State => {
    return {
      ...state
    };
  }),
  on(loadAllPatternsSuccessAction, (state: State, { allGrids }): State => {
    return {
      ...state,
      allGrids
    };
  }),
  on(loadAllPatternsFailureAction, (state: State, { error }): State => {
    return {
      ...state,
      error
    };
  }),

  on(removePatternAction, (state: State): State => {
    return {
      ...state
    };
  }),
  on(removePatternSuccessAction, (state: State, { name }): State => {
    const allGrids = { ...state.allGrids };
    delete allGrids[name];
    return {
      ...state,
      allGrids
    };
  }),
  on(removePatternFailureAction, (state: State, { error }): State => {
    return {
      ...state,
      error
    };
  }),



);

export function reducer(state: State | undefined, action: Action): State {
  return gridReducer(state, action);
}
