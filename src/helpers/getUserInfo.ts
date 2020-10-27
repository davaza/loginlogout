import { UrlTypes } from '../Actions/Consts';

export const getUserInfo = async (endPoint: string) => {
    try {
        let testText = `${UrlTypes.URL_ROOT}/${UrlTypes.URL_USER_INFO}/${endPoint}`;
        const response = await fetch(`${UrlTypes.URL_ROOT}/${UrlTypes.URL_USER_INFO}/${endPoint}`);
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.warn('getData Error: ', err);
    }
}