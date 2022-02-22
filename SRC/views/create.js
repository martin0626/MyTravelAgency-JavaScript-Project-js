import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import { createEditFunc } from "../Functionality/CDFunc.js";

let temp = () => html `
<form @submit="${createEditFunc}">
    <div class="inputForm" id='create'>
        <h1>Create your own idea!</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Destination name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="number" class="form-control" name="price" id="exampleFormControlInput2" placeholder="BGN">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Image</label>
            <input type="text" class="form-control" name="imgUrl" id="exampleFormControlInput3" placeholder="URL">
        </div>
        <div class="d-grid gap-2"> 
            <button class="btn btn-primary" type="submit">Create</button>
        </div>
    </div>
</form>
`
export function createView() {
    render(temp(), document.querySelector('main'))
}