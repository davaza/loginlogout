import { Dispatch } from "redux";
import { IActionType } from "../common";
import { ActionTypes, AsyncActionTypes, UrlTypes } from "./Consts";
import { getData } from "../helpers/getData";
import { checkResponse } from "../helpers/checkResponse";

export class ProfileActions {
    constructor(private dispatch: Dispatch<IActionType>) { }
    getProfile = (id: string) => {
        this.dispatch({ type: `${ActionTypes.PROFILE}${AsyncActionTypes.BEGIN}` });

        getData(`${UrlTypes.URL_ROOT}/${UrlTypes.URL_USER_INFO}/${id}`).then(response => {
            if (checkResponse(response)) {
                this.dispatch({
                    type: `${ActionTypes.PROFILE}${AsyncActionTypes.SUCCESS}`,
                    payload: response.data
                });

            } else {
                this.dispatch({
                    type: `${ActionTypes.PROFILE}${AsyncActionTypes.FAILURE}`,
                    payload: { errorMsg: response.message }
                });
            }
        })
            .catch(error => {
                this.dispatch({
                    type: `${ActionTypes.PROFILE}${AsyncActionTypes.FAILURE}`,
                    payload: "Сервер временно не доступен",
                });
            });
    };
}
