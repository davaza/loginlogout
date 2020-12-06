import { UrlTypes } from '../Actions/Consts';

export const getNewsData = async () => {
    try {
        const response = await fetch(`${UrlTypes.URL_ROOT}/${UrlTypes.URL_NEWS}`);
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