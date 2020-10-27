import { SessionActions } from "./SessionActions";
import { ProfileActions } from "./ProfileActions";

export enum ActionTypes {
    LOGIN = 'ACTION_LOGIN',
    LOGOUT = 'ACTION_LOGOUT',
    PROFILE = "ACTION_PROFILE"
}

export enum AsyncActionTypes {
    BEGIN = '_BEGIN',
    SUCCESS = '_SUCCESS',
    FAILURE = '_FAILURE',
    INCORRECT_AUTH = '_INCORRECT_AUTH',
}

export enum UrlTypes {
    URL_ROOT = 'https://mysterious-reef-29460.herokuapp.com/api/v1',
    URL_USER_INFO = 'user-info',
    URL_LOGIN = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
}

export interface IDispatchSessionProps {
    actions: SessionActions;
}

export interface IDispatchProfileProps {
    actions: ProfileActions;
}


