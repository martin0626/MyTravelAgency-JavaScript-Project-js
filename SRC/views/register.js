import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import { registerFunc } from "../Functionality/registerFunc.js";

let temp = () => html `
<form class='inputForm' @submit="${registerFunc}">
    <h1>Register</h1>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-center">Username</label>
        <input type="text" class="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-center">Email address</label>
        <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
        <input type="password" class="form-control" name="rePass" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`
export function registerView() {
    render(temp(), document.querySelector('main'))
}