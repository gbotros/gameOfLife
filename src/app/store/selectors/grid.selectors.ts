import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../reducers';
import * as fromGame from '../reducers/game-reducer.reducer';
import { State } from '../reducers/game-reducer.reducer';


export const selectGameFeature = (state: RootState) => state.gameState;

export const getCurrentGrid =
  createSelector(selectGameFeature,
    (state: fromGame.State) => state.currentGrid);
