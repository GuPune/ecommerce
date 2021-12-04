export default function authHeader() {
    const user = window.localStorage.getItem("auth._token.local");
    return {
        "Content-type": "application/json",
        'Authorization': user
    };
}

