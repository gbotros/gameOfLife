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
import * as fromGrid from './grid.reducer';

export interface RootState {
  gridState: fromGrid.State;
}

export const initialRootState: RootState = {
  gridState: fromGrid.initialState,
};

export const reducers: ActionReducerMap<RootState> = {
  gridState: fromGrid.reducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [storeFreeze] : [];
