import { createReducer, on } from '@ngrx/store';
import { toggle } from './app.actions';
 
export const initialState = false;
 
const _appReducer = createReducer(
  initialState,
  on(toggle, (state) => !state),
);
 
export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}