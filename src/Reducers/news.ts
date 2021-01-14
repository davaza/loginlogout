import { IActionType } from '../common'
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';

export type TNews = {
    id: number;
    title: string;
    text: string;
}


export interface IStoreStateNews {
    news: {
        loading: boolean;
        failure: boolean;
        message: string;
        newsData: TNews[]
    }
}

const initialState = {
    get state(): IStoreStateNews {
        let news = {
            loading: false,
            failure: false,
            message: '',
            newsData: []
        }
        return { news };
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
                newsData: action.payload
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



