import { SessionActions } from "./SessionActions";
import { ProfileActions } from "./ProfileActions";
import { NewsActions } from "./NewsActions";

export enum ActionTypes {
    LOGIN = 'ACTION_LOGIN',
    LOGOUT = 'ACTION_LOGOUT',
    PROFILE = "ACTION_PROFILE",
    NEWS = "ACTION_NEWS"
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
    URL_NEWS = 'news'
}

export interface IDispatchSessionProps {
    actions: SessionActions;
}

export interface IDispatchProfileProps {
    actions: ProfileActions;
}

export interface IDispatchNewsProps {
    actions: NewsActions;
}


