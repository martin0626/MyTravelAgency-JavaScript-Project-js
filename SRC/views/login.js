import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import { loginFunc } from "../Functionality/loginFunc.js";

let temp = () => html `
<form class='inputForm' @submit="${loginFunc}">
    <h1>Login</h1>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-center">Username</label>
        <input type="text" class="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
export function loginView() {
    render(temp(), document.querySelector('main'))
}