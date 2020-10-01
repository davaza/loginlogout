import { Action } from 'redux'

export interface IActionType extends Action {
  type: string
  payload?: any
}

export interface IStateProps {
  checkAuth: boolean;
  loading?: boolean;
  failure?: boolean;
}
