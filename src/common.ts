import { Action } from 'redux'

export interface IActionType extends Action {
  type: string
  payload?: any
}

export interface IStateProps {
  checkAuth?: boolean;
  loading?: boolean;
  failure?: boolean;
  user?: { name: string };
  message?: string;
}

export interface ILoginCheckState {
  redirectToPreviousRoute: boolean; 
}
