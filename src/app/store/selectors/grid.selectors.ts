import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../reducers';
import * as fromGame from '../reducers/grid.reducer';
import { State } from '../reducers/grid.reducer';


export const selectGameFeature = (state: RootState) => state.gameState;

export const getCurrentGrid =
  createSelector(selectGameFeature,
    (state: fromGame.State) => state.currentGrid);
