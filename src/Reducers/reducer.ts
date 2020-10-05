import { IActionType } from '../common'
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';

export interface IStoreState {
    checkAuth: boolean;
    loading?: boolean;
    failure?: boolean;
    user?: { name: string };
}

const initialState = {
    get state(): IStoreState {
        return {
            checkAuth: false,
            loading: false,
            failure: false,
            user: undefined
        }
    }
}

export function reducer(state: IStoreState = initialState.state, action: IActionType) {
    switch (action.type) {
        case `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`:
            return {
                ...state,
                loading: true
            };
        case `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`:
            return {
                ...state,
                loading: false,
                checkAuth: true,
                user: {
                    name: action.payload.name,
                }
            }
        case `${ActionTypes.LOGIN}${AsyncActionTypes.INCORRECT_AUTH}`:
            return {
                ...state,
                loading: false,
                checkAuth: false
            }
        case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                loading: false,
                checkAuth: false,
                failure: true
            }
        case `${ActionTypes.LOGOUT}`:
            return {
                ...state,
                checkAuth: false,
            }
    }
    return state;
}



