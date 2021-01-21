import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../reducers';
import * as fromGame from '../reducers/grid.reducer';
import { State } from '../reducers/grid.reducer';


export const selectGridFeature = (state: RootState) => state.gridState;

export const getCurrentGrid =
  createSelector(selectGridFeature,
    (state: fromGame.State) => state.currentGrid);

export const getAllGrids =
  createSelector(selectGridFeature,
    (state: fromGame.State) => state.allGrids);



