import { login } from "../Api/api.js";
import { notify } from "../tools/notify.js";

export async function loginFunc(event) {
    event.preventDefault();

    let data = new FormData(event.target);

    let username = data.get('username');
    let password = data.get('password');


    if (username.trim() != '' && password.trim() != '') {
        let userInfo = {
            username: username,
            password: password
        }
        await login(userInfo);
    } else {
        notify('All fields are required!')
    }
}