export function checkResponse(res: any) {
    if (res.status === 'ok') {
        return true;
    } else {
        return false;
    }
}