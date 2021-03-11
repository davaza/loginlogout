import { IActionType } from '../common'
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';

export type TSession={
    checkAuth: boolean;
    loading?: boolean;
    failure?: boolean;
    user?: { name: string };
    message?: string;
}

export interface IStoreState {
    session: TSession
}


const initialState = {
    get state(): IStoreState {
        let session={
            checkAuth: false,
            loading: false,
            failure: false,
            user: undefined,
            message: ""
        }
        return {session};
    }
}

export default function reducer(state: IStoreState = initialState.state, action: IActionType) {
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
                    id: action.payload.id
                },
                message: ""
            }
        case `${ActionTypes.LOGIN}${AsyncActionTypes.INCORRECT_AUTH}`:
            return {
                ...state,
                loading: false,
                checkAuth: false,
                message: "Имя пользователя или пароль введены не верно"
            }
        case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                loading: false,
                checkAuth: false,
                failure: true,
                message: "Проблемы с доступом к серверу"
            }
        case `${ActionTypes.LOGOUT}`:
            return {
                ...state,
                checkAuth: false,
            }
    }
    return state;
}



