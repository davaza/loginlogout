import { Dispatch } from "redux";
import { IActionType } from "../common";
import { ActionTypes, AsyncActionTypes, UrlTypes } from "./Consts";
import { getNewsData } from "../helpers/getNewsData";
import { checkResponse } from "../helpers/checkResponse";

export class NewsActions {
    constructor(private dispatch: Dispatch<IActionType>) { }
    getNews = (id: string) => {
        this.dispatch({ type: `${ActionTypes.NEWS}${AsyncActionTypes.BEGIN}` });

        getNewsData().then(response => {
            if (checkResponse(response)) {
                this.dispatch({
                    type: `${ActionTypes.NEWS}${AsyncActionTypes.SUCCESS}`,
                    payload: response.data
                });

            } else {
                this.dispatch({
                    type: `${ActionTypes.NEWS}${AsyncActionTypes.FAILURE}`,
                    payload: { errorMsg: response.message }
                });
            }
        })
            .catch(error => {
                this.dispatch({
                    type: `${ActionTypes.NEWS}${AsyncActionTypes.FAILURE}`,
                    payload: "Сервер временно не доступен",
                });
            });
    };
}
