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
        message: string;
        userInfo: TUserInfo
    }
}

// export interface IStoreProps {
//     loading: boolean;
//     failure: boolean;
//     message: string;
//     userInfo: TUserInfo;
//     //profileProps: any

// }


const initialState = {
    get state(): IStoreState {
        let profile = {
            loading: false,
            failure: false,
            message: '',
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
                loading: true
            };
        case `${ActionTypes.PROFILE}${AsyncActionTypes.SUCCESS}`:
            return {
                ...state,
                loading: false,
                userInfo: {
                    city: action.payload.city,
                    languages: action.payload.languages,
                    social: action.payload.social
                },
            };
        case `${ActionTypes.PROFILE}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                loading: false,
                failure: true,
                message: action.payload.errorMsg
            }
    }
    return state;
}



