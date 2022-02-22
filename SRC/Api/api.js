import { updateNav } from "../tools/updateNav.js";
import { clearUserData, getUserData, setUserData } from "../tools/user.js";
import page from '../lib/page.mjs'
import { notify } from "../tools/notify.js";

let rootUrl = 'https://parseapi.back4app.com'

async function requestFunc(url, options) {


    try {
        let req = await fetch(rootUrl + url, options);

        if (req.ok != true) {
            let message = await req.json();

            notify(message.error);
            return undefined
        }
        return await req.json();

    } catch (error) {
        alert(error.message)
        throw error;
    }


}


function createOptions(method, data) {
    let options = {
        method: method,
        headers: {
            "X-Parse-Application-Id": "veyas5BqSXHYeYB10UgLMl8UL2TRa6N3WjYbtWjs",
            "X-Parse-REST-API-Key": "DuDCBf3vPbEGJjSd8qoxtVUr1SUX1hv4Q3Qgne1j"
        }
    }

    let userData = getUserData();

    if (userData != null) {
        options.headers['X-Parse-Session-Token'] = userData.token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    return options;
}


export async function get(url) {
    return requestFunc(url, createOptions('GET'));
}

export async function post(url, data) {
    return requestFunc(url, createOptions('POST', data));
}

export async function put(url, data) {
    return requestFunc(url, createOptions('put', data));
}

export async function del(url) {
    return requestFunc(url, createOptions('DELETE'));
}

export async function register(data) {
    let result = await post('/users', data);


    if (result) {
        let userData = {
            username: data.username,
            id: result.objectId,
            token: result.sessionToken
        }
        setUserData(userData);
        page.redirect('/home');
        updateNav();
    }

    return result;

}

export async function login(data) {
    let result = await post('/login', data);
    let userData = {
        username: data.username,
        id: result.objectId,
        token: result.sessionToken
    }

    setUserData(userData);
    page.redirect('/home');
    updateNav();
    return result;

}

export async function logout() {
    clearUserData();
    post('/logout')
    page.redirect('/home');
    updateNav();
}