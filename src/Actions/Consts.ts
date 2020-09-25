import { Actions } from "./Actions";

export enum ActionTypes {
    LOGIN = 'ACTION_LOGIN',
    LOGOUT = 'ACTION_LOGOUT',
}

export enum AsyncActionTypes {
    BEGIN = '_BEGIN',
    SUCCESS = '_SUCCESS',
    FAILURE = '_FAILURE',
    INCORRECT_AUTH = '_INCORRECT_AUTH'
}

export enum UrlTypes {
    URL_LOGIN = 'https://5f216032daa42f00166659f5.mockapi.io/login',
}

export interface IDispatchProps {
    actions: Actions;
}


