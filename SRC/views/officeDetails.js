import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import {get } from "../Api/api.js";

let temp = (office) => html `
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=".${office.imgUrl}">
            <hr>
            <p class="description-para">${office.description}</p>

            <!-- <div class="listings-buttons">
            <a href="#" class="button-list">Edit</a>
            <a href="#" class="button-list">Delete</a>
                </div> -->
        </div>
    </section>
`
export async function officeView(ctx) {
    let id = ctx.params.id
    let office = await get('/classes/offices/' + id)
    render(temp(office), document.querySelector('main'))
}