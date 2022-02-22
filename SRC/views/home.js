import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import {get } from "../Api/api.js";


let temp = (offices) => html `
<div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
    ${offices.map(office => html`
            <div class="col-lg-4">
                <img src="${office.imgUrl}" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <h2>${office.city}</h2>
                <p>${office.info}</p>
                <p><a class="btn btn-secondary" href="/office/${office.objectId}">View details »</a></p>
    `)}
    </div>

    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading">You want to trvel? <span class="text-muted">This is your website!</span></h2>
            <p class="lead">Here you can find different destinations, uploaded by other users just like you.</p>
        </div>
        <div class="col-md-5">
            <img src="./images/home-travel.jpg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text></img>

        </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
        <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Share your vacation with other people. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">On our website you can share your last or your best vacation with other users and help them to choose.</p>
        </div>
        <div class="col-md-5 order-md-1">
            <img src="./images/home-share.jfif" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text></img>

        </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading">You can contact us 24/7</h2>
            <p class="lead">Send us email, call on the phone or visit our offices in Sofia, London and Paris. We will plan your trip and offer you good prices. <span type="button" @click="${()=> page.redirect("/catalog")}">Click to see our destinations.</span>.</p>
        </div>
        <div class="col-md-5">
            <img src="./images/home-lastP.jfif" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em"></text></img>

        </div>
    </div>
</div>
`
export async function homeView() {
    let offices = await get('/classes/offices');
    render(temp(offices.results), document.querySelector('main'))

}