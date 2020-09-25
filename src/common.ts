import { Action } from 'redux'

export interface IActionType extends Action {
  type: string
  payload?: any
}
