import {
    Action,
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';


import { environment } from '../environments/environment';

import * as tromelinTaxonsReducer from './modules/tromelin/tromelin.reducer';


export interface AppState {
  sidenavOpened: boolean,
  sidenavendOpened: boolean,
  ile_id: number
}
const initialState = {
    sidenavOpened: true,
    sidenavendOpened: false,
    ile_id: null
}

export const POPULATE_STATE = '[UI] populate state';
export class PopulateState implements Action {
  readonly type = POPULATE_STATE;
  constructor(public payload: any) {}
}


// exporting a custom type
export type AppAction = PopulateState;  

export function reducer(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    case POPULATE_STATE: { 
      const data = { ...state, ...action.payload };
      return { ...data };
    }
  }
  return state;
}

export const reducers: ActionReducerMap<any> = {
  appState: reducer
}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: AppState, action: any): AppState {
    // console.log("test", state, action)
    return reducer(state, action);
  };
}

export const appMetaReducers: MetaReducer<any>[] = !environment.production
  ? [logger]
  : [];


export const getAppState = createFeatureSelector<AppState>('appState');

export const getState = createSelector(
    getAppState,
    (state: AppState) => state
);