import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { Grid } from 'src/app/models/grid';
import { environment } from '../../../environments/environment';
import { GridActions } from '../actions/grid.actions';
import * as fromGame from './grid.reducer';

export interface RootState {
  gameState: fromGame.State;
}

export const initialRootState: RootState = {
  gameState: fromGame.initialState,
};

export const reducers: ActionReducerMap<RootState> = {
  gameState: fromGame.reducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [storeFreeze] : [];
