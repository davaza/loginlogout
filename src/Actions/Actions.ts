import { Dispatch } from "redux";
import { IActionType } from "../common";
import { ActionTypes, AsyncActionTypes, UrlTypes } from "./Consts";
import { ILoginData } from "./Models";

export class Actions {
    constructor(private dispatch: Dispatch<IActionType>) { }
    validation = (loginData: ILoginData, cb: Function) => {
        this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}` });
        var bodyParams = {
            email: loginData.login,
            password: loginData.pass
        }
        const options = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(bodyParams)
        }

        fetch(UrlTypes.URL_LOGIN, options)
            .then(response => {
                if (response.status === 200) {
                    return Promise.resolve(response)
                } else {
                    this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}` });
                    throw response.statusText;
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === "ok" && data.data.id !== undefined) {
                    this.dispatch({
                        type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
                        payload: { name: "TEST", id: data.data.id }
                    });
                    cb();
                }
                else if (data.status === "err" && data.message === "wrong_email_or_password") {
                    // eslint-disable-next-line no-throw-literal
                    this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.INCORRECT_AUTH}` });
                } else {
                    this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}` });
                }
            });

    };
    logout = (cb: Function) => {
        this.dispatch({ type: `${ActionTypes.LOGOUT}` });
        cb();
    };
}
