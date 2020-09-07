import { 
    Action, createFeatureSelector, createSelector
} from '@ngrx/store';

import { TaxonItem } from './interfaces/tromelin.interface';



export interface State {
    taxons: TaxonItem[]
};
export const initialState: State = {
    taxons: <TaxonItem[]> []
};



export const POPULATE_STATE = '[Tromelin-taxons]Populate state';

export class PopulateState implements Action {
    readonly type = POPULATE_STATE;
    constructor(public payload: State) {}
  }
  
// export class clearState implements Action {
// readonly type = CLEAR_STATE;
// constructor() {}
// }
  
export type ValidationTaxonsAction = PopulateState/*|clearState*/;


export function tromelinReducer(state: State = initialState, action: ValidationTaxonsAction) {
    
    switch (action.type) {

        case POPULATE_STATE: { 
            const data = Object.assign(state, action.payload);
            return {...data};
        }

        // case CLEAR_STATE: {  
        //     const data: State = Object.assign(state);
        //     data.filters = <taxonsInterface.TaxonsFilters>{}
        //     return {...data};
        // }

    }
    return state;
}



