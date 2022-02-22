import page from "../lib/page.mjs";
import { html, render } from '../lib/lit-html.js'
import {get } from "../Api/api.js";
import { getUserData } from "../tools/user.js";
import { getAllLikes, isLiked, like, unlike } from "../Functionality/destinationFuncs/like.js";
import { comment, delComment } from "../Functionality/destinationFuncs/comment.js";

let temp = (dest, isOwner, likes, isUserLike, comments, author) => html `
<section id="movie-example">
    <div class="container">
        <div class="row bg-dark text-light">
            <p type="button" class="btn-close btn-close-white" aria-label="Close" id="close" @click="${()=>page.redirect('/catalog')}"></p>

            <h1>Destination: ${dest.name}</h1>
            <h3>Author: ${author}</h3>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${dest.imgUrl}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Description</h3>
                <p>${dest.description}</p>
                <p>Price: ${dest.price}BGN</p>

                ${isOwner
                    ?html`<a class="btn btn-info" href="/edit/${dest.objectId}">Edit</a>`
                    :''}
                ${getUserData() != null
                    ?html`${isUserLike == false
                        ?html`<a class="btn btn-primary" href="#" @click="${like.bind(null, dest)}">Like</a>`
                        :html`<a class="btn btn-danger" href="#" @click="${unlike.bind(null, dest)}">Unlike</a>`
                    }
                    `
                    :''
                }
                <span class="enrolled-span">Liked ${likes}</span>
            </div>
            
        </div>
        ${getUserData() != null
        ? html`
            <div class="form-floating" id="makeComment">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Comments</label>
                <button type="button" class="btn btn-primary" @click="${comment.bind(null, dest)}">Comment</button>
            </div>
        `
        :html`<h3 id="cmtH1">Comments</h3>`}
        
        
        <ol class="comment-list">
            ${comments.map(c => 
                html`
                <article id="comment">
                    ${getUserData() != null && getUserData().id == c.authorId? html`<p type="button" class="btn-close btn-close-white" aria-label="Close" id="close" @click="${delComment.bind(null, c)}"></p>`: ''}
                    
                    <header class="comment-header">
                        <p class="comment-author"> <img alt="" src="https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=48&amp;d=mm&amp;r=g" data-lazy-srcset="https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=96&amp;d=mm&amp;r=g 2x" class="avatar avatar-48 photo lazyloaded"
                                height="48" width="48" loading="lazy" data-lazy-src="https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=48&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=96&amp;d=mm&amp;r=g 2x"
                                data-was-processed="true"><noscript><img alt='' src='https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=48&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/6a9c99ca913c3cd3c4b1264f90eb9d17?s=96&#038;d=mm&#038;r=g 2x' class='avatar avatar-48 photo' height='48' width='48' loading='lazy'/></noscript>
                            <span class="comment-author-name">${c.authorUsername}</span></p>
                    </header>
                    <div class="comment-content">
                        <p>${c.comment}</p>
                    </div>
                </article>

                `
                )}        
        </ol>
            

    </div>
</section>
`

export async function destinationView(ctx) {
    let id = ctx.params.id;

    let dest = await get('/classes/Destinations/' + id);
    let comments =(await get('/classes/comments')).results.filter(cm => cm.destinationId == dest.objectId).reverse();
    let authorName = (await get ('/users/' + dest.user.objectId)).username;

    let isUserLike = isLiked(dest);
    let isOwner = getUserData() != null && getUserData().id == dest.user['objectId'];
    render(temp(dest, isOwner, getAllLikes(dest), isUserLike, comments, authorName), document.querySelector('main'));

}