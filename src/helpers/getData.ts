export const getData = async (url: string) => {
    try {
        const response = await fetch(url);
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