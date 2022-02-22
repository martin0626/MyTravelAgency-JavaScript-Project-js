import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import {get } from "../Api/api.js";


let temp = (destinations) => html `
<div class="album py-5">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        ${destinations.map(d=> html`
            <div class="col">
                <div class="card shadow-sm">
                <img src='${d.imgUrl}' class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"></rect></img>
                    <div class="card-body">
                <p class="card-text text-dark">${d.name}. We offer you transport from airport, brekfast, lunch and entertaiment included in the price.</p>
                <p><a class="btn btn-secondary" href="/dest/${d.objectId}">Details »</a></p>
                </div>
            </div>
        </div>
        `)}
        </div>
    </div>
</div>
`
export async function catalogView() {
    let destinations = await get('/classes/Destinations');
    render(temp(destinations.results), document.querySelector('main'));
}

function asd(){
    console.log('asd');
}


{/* <div class="col">
                <div class="card shadow-sm">
                    <img src='https://th.bing.com/th/id/R.aa31322fcad3ccbea5ff43122787e486?rik=J2CQ67dp%2brnySw&riu=http%3a%2f%2fd3e1m60ptf1oym.cloudfront.net%2f8c69eada-2523-4f17-8dcd-0b53dcc21193%2f171030-A204_xlarge.jpg&ehk=yk6DYcpGL%2f82N%2fS0oh2yRuCGR1HQXgBe3eV8Oc1pK6A%3d&risl=&pid=ImgRaw&r=0'
                        class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    </img>

                    <div class="card-body">
                        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src='../../images/Belogradchik.jpg'
                        class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <div class="card-body">
                        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src='../../images/Kaliakra.jpg'
                        class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <div class="card-body">
                        <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}