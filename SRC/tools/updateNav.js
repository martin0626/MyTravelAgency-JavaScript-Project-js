import { getUserData } from "./user.js";

export function updateNav() {
    if (getUserData() == null) {
        Array.from(document.getElementsByClassName('user')).map(el => el.style.display = 'none');
        Array.from(document.getElementsByClassName('guest')).map(el => el.style.display = 'block');
    } else {
        Array.from(document.getElementsByClassName('user')).map(el => el.style.display = 'block');
        Array.from(document.getElementsByClassName('guest')).map(el => el.style.display = 'none');
    }
}