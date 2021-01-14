import { Dispatch } from "redux";
import { IActionType } from "../common";
import { ActionTypes, AsyncActionTypes, UrlTypes } from "./Consts";
import { getData } from "../helpers/getData";
import { checkResponse } from "../helpers/checkResponse";

export class NewsActions {
    constructor(private dispatch: Dispatch<IActionType>) { }
    getNews = () => {
        this.dispatch({ type: `${ActionTypes.NEWS}${AsyncActionTypes.BEGIN}` });

        getData(`${UrlTypes.URL_ROOT}/${UrlTypes.URL_NEWS}`).then(response => {
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
