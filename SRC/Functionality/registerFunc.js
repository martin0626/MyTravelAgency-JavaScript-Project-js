import { register } from "../Api/api.js";
import { notify } from "../tools/notify.js";

export async function registerFunc(event) {
    event.preventDefault();

    let data = new FormData(event.target);

    let username = data.get('username');
    let email = data.get('email');
    let password = data.get('password');
    let rePass = data.get('rePass');


    if (username.trim() == '' || email.trim() == '' || password.trim() == '') {
        notify('All fields are required!')

    } else if (rePass.trim() != password.trim()) {
        notify('Passwords don\'t match!')

    } else {
        let userInfo = {
            username: username,
            email: email,
            password: password
        }

        await register(userInfo);
    }
}