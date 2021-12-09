import api from "./api";

export const signup = (user) => {
    const url = "/signup";
    return api.post(url, user)
}
export const signin = (users) => {
    const url = "/signin";
    return api.post(url, users)
}
export const getALL = () => {
    const url = "/users";
    return api.get(url)
}
export const DELETE = (id) => {
    const url = "/users/" + id;
    return api.delete(url);
}
