import { Actions } from "./Actions";

export enum ActionTypes {
    LOGIN = 'ACTION_LOGIN',
    LOGOUT = 'ACTION_LOGOUT',
}

export enum AsyncActionTypes {
    BEGIN = '_BEGIN',
    SUCCESS = '_SUCCESS',
    FAILURE = '_FAILURE',
    INCORRECT_AUTH = '_INCORRECT_AUTH',

}

export enum UrlTypes {
    URL_LOGIN = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
}

export interface IDispatchProps {
    actions: Actions;
}


