import { IActionType } from '../common'
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';

export type TUserInfo = {

    city: string;
    languages: string[];
    social: {
        label: string;
        link: string;
    }[];
}

export interface IStoreState {
    profile: {
        loading: boolean;
        failure: boolean;
        userInfo: TUserInfo
    }
}


const initialState = {
    get state(): IStoreState {
        let profile = {
            loading: false,
            failure: false,
            userInfo: {
                city: "",
                languages: [],
                social: []
            }
        }
        return { profile };
    }
}

export default function reducer(state: IStoreState = initialState.state, action: IActionType) {
    switch (action.type) {
        case `${ActionTypes.PROFILE}${AsyncActionTypes.BEGIN}`:
            return {
                ...state,
                profile: { loading: true }
            };
        case `${ActionTypes.PROFILE}${AsyncActionTypes.SUCCESS}`:
            return {
                ...state,
                profile: {
                    loading: false,
                    userInfo: {
                        city: action.payload.city,
                        languages: action.payload.languages,
                        social: action.payload.social
                    },
                }
            };
        case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                profile: {
                    loading: false,
                    failure: true
                },
                message: "Проблемы с доступом к серверу"
            }
    }
    return state;
}



