import { html, render } from '../lib/lit-html.js'
import {get } from '../Api/api.js';
import { createEditFunc } from "../Functionality/CDFunc.js";
import { delElem } from '../Functionality/destinationFuncs/deleteDest.js';

let temp = (dest) => html `
<form @submit="${createEditFunc}" id="${dest.objectId}">
    <div class="inputForm" id='create'>
        <h1>Edit</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Destination name" value="${dest.name}">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3">${dest.description}</textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="number" class="form-control" name="price" id="exampleFormControlInput2" placeholder="BGN" value="${dest.price}">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Image</label>
            <input type="text" class="form-control" name="imgUrl" id="exampleFormControlInput3" placeholder="URL" value="${dest.imgUrl}">
        </div>
        <div class="d-grid gap-2"> 
            <button class="btn btn-primary" type="submit">Edit</button>
            <button class="btn btn-primary" type="button" @click="${delElem.bind(null, dest.objectId)}">Delete</button>
        </div>
    </div>
</form>
`
export async function editView(ctx) {
    let id = ctx.params.id;
    let destInfo = await get('/classes/Destinations/' + id);
    render(temp(destInfo), document.querySelector('main'));
}