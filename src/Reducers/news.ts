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

export type TNews = {
        id: number;
        title: string;
        text: string;
}


export interface IStoreStateNews {    
        loading: boolean;
        failure: boolean;
        message: string;
        newsData: TNews[]
}

// export interface IStoreProps {
//     loading: boolean;
//     failure: boolean;
//     message: string;
//     userInfo: TUserInfo;
//     //profileProps: any

// }


const initialState = {
    get state(): IStoreStateNews {
        return { 
            loading: false,
            failure: false,
            message: '',
            newsData: []
         };
    }
}

export default function reducer(state: IStoreStateNews = initialState.state, action: IActionType) {
    switch (action.type) {
        case `${ActionTypes.NEWS}${AsyncActionTypes.BEGIN}`:
            return {
                ...state,
                loading: true
            };
        case `${ActionTypes.NEWS}${AsyncActionTypes.SUCCESS}`:
            return {
                ...state,
                loading: false,
                newsData: {
                    id: action.payload.id,
                    title: action.payload.title,
                    text: action.payload.text
                },
            };
        case `${ActionTypes.NEWS}${AsyncActionTypes.FAILURE}`:
            return {
                ...state,
                loading: false,
                failure: true,
                message: action.payload.errorMsg
            }
    }
    return state;
}



